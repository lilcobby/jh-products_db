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
  onDelete: "CASCADE",
});
Product.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: "product_id",
  onDelete: "CASCADE",
});
Category.hasMany(Product, {
  foreignKey: "category_id",
  onDelete: "CASCADE",
});
Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: "tag_id",
  onDelete: "CASCADE",
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
