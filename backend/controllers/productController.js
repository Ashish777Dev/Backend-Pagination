const Product = require(`./../models/productModel`);

exports.getAllProducts = async (req, res) => {
  try {
    const reqObj = { ...req.query };

    const excludedFields = ["sort", "limit", "fields", "page"];

    excludedFields.forEach((el) => delete excludedFields[el]);

    let query = Product.find();

    let limit = req.query.limit * 1 || 6;
    let page = req.query.page * 1 || 1;

    //   1-1=0 0*12=12
    //   2-1=1 1*12=12
    //   3-1=2 2*12=24
    //   4-1=3 3*12=36
    //   5-1=4 4*12=48
    let skip = (page - 1) * limit;

    const totalDocuments = await Product.countDocuments(); //TOTAL 50

    if (skip >= totalDocuments) {
      throw new Error("Page doesn't exsists");
    }

    query = query.skip(skip).limit(limit);

    const products = await query;

    res.status(200).json({
      status: "success",
      total: totalDocuments,
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
