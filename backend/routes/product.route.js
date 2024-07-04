const express = require("express");
const router = express.Router();
const {
  getAllProduct,
  getSingleProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/product.controller");

//get all products

router.get("/", getAllProduct);

// get a single product

router.get("/:id", getSingleProduct);

// craete a new product
router.post("/", createProduct);

// update a product

router.put("/:id", updateProduct);

//delete a product

router.delete("/:id", deleteProduct);

module.exports = router;
