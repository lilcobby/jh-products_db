const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

router.get("/", async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const allCat = await Category.findAll({
      include: [{ model: Product, attributes: ["product_name"] }],
    });
    res.status(200).json(allCat);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const specCat = await Category.findByPk(req.params.id, {
      include: [
        { model: Product, attributes: ["category_id", "product_name"] },
      ],
    });
    if (!specCat) {
      res.status(404).json({ message: "nothing with that category id" });
      return;
    }
    res.status(200).json(specCat);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  // create a new category
  try {
    const postCat = await Category.create({
      category_name: req.body.category_name,
    });
    res.status(200).json(postCat);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/:id", async (req, res) => {
  // update a category by its `id` value
  try {
    const updateCat = await Category.update(
      { category_name: req.body.category_name },
      { where: { category_id: req.params.id } }
    );
    if (!updateCat) {
      res
        .status(404)
        .json({ message: "please select an existing category id" });
      return;
    }
    const updatedCat = await Category.findOne({
      where: { category_id: req.params.id },
    });
    res.status(200).json(updatedCat);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  // delete a category by its `id` value
  try {
    // need to destroy associations in products table or error trips.
    await Product.destroy({ where: { category_id: req.params.id } });
    const deleteCat = await Category.destroy({
      where: { category_id: req.params.id },
    });
    if (!deleteCat) {
      res.status(404).json({ message: "no category with that id found" });
      return;
    }
    res.status(200).json(`${req.params.id} deleted`);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
