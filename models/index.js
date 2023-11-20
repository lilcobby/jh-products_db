// import models
const Product = require("./Product");
const Category = require("./Category");
const Tag = require("./Tag");
const ProductTag = require("./ProductTag");

// Products belongsTo Category
// Tags belongToMany Products (through ProductTag)
// Products belongToMany Tags (through ProductTag)
// Categories have many Products
Product.belongsTo(Category, {
  foreignKey: "category_id",
});
Product.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: "product_id",
});
Category.hasMany(Product, {
  foreignKey: "category_id",
});
Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: "tag_id",
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
