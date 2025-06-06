import asyncHandler from "../middleware/asyncHandler.js";
import Product from "../models/product.js";

/**
 * @desc Fetch all products
 * @route /api/products
 * @access public
 */
const getProducts = asyncHandler(async (_, res) => {
  res.json(await Product.find({}));
});

/**
 * @desc Fetch product by Id
 * @route /api/products/:id
 * @access public
 */
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

export { getProducts, getProductById };
