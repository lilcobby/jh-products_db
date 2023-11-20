const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");
const { all } = require("./category-routes");

// The `/api/tags` endpoint

router.get("/", async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const allTag = await Tag.findAll({
      include: [{ model: Product }],
    });
    res.status(200).json(allTag);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  // find a single tag by its `id`
  try {
    const getSpec = await Tag.findByPk(req.params.id, {
      include: [{ model: Product }],
    });
    if (!getSpec) {
      res.status(404).json({ message: "nothing to get with that tag id" });
      return;
    }

    res.status(200).json(getSpec);
  } catch (err) {
    res.status(500).json(err);
  }
});

// be sure to include its associated Product data

router.post("/", async (req, res) => {
  // create a new tag
  try {
    const postTag = await Tag.create({ tag_name: req.body.tag_name });
    res.status(200).json(postTag);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put("/:id", async (req, res) => {
  // update a tag's name by its `id` value
  try {
    const updateTag = await Tag.update(
      { tag_name: req.body.tag_name },
      { where: { tag_id: req.params.id } }
    );

    if (!updateTag) {
      res.status(404).json({ message: "no tag found with that id" });

      return;
    }
    // shows what i need in insomnia
    const updatedTag = await Tag.findOne({ where: { tag_id: req.params.id } });
    res.status(200).json(updatedTag);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  // delete on tag by its `id` value
  try {
    const deleteTag = await Tag.destroy({ where: { tag_id: req.params.id } });
    // res.status(200).json(deleteTag);
    if (!deleteTag) {
      res.status(404).json({ message: "no tag found with that id" });

      return;
    }
    res.status(200).json(` tag_id: ${req.params.id} deleted`);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
