const Product = require(`./../models/productModel`);
const APIFeatures = require("./../utils/apiFeatures");

exports.getAllProducts = async (req, res) => {
  try {
    const features = new APIFeatures(Product.find(), req.query)
      .filter()
      .pagination();

    // const categories = await Product.distinct("category");
    // const totalDocuments = await Product.countDocuments();
    // const products = await features.query;

    const [categories, filteredTotal, products] = await Promise.all([
      Product.distinct("category"),
      Product.countDocuments(features.query.getFilter()),
      features.query,
    ]);

    res.status(200).json({
      status: "success",
      total: filteredTotal,
      categories,
      results: products.length,
      data: {
        products,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: `${error}`,
    });
  }
};
