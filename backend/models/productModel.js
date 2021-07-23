import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: { type: "string", required: true, unique: true },
    image: { type: "string", required: true },
    brand: { type: "string", required: true },
    category: { type: "string", required: true },
    description: { type: "string", required: true },
    price: { type: "Number", required: true },
    countInStock: { type: "Number", required: true },
    rating: { type: "Number", required: true },
    numReviews: { type: "Number", required: true },
  },
  {
    timestamp: true,
  }
);

const Product = mongoose.model("Product", productSchema);

export default Product;
