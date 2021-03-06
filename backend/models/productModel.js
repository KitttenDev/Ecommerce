import mongoose from "mongoose";

const reviewSchema = mongoose.Schema(

  {
    name: { type: String, required: true },
    rating: { type: Number, required: true },
    comment: { type: String, required: true },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },
  },
  {
    timestamps: false,
  }
)

const productSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true,
    },
    brand: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true,
    },
    reviews: [reviewSchema],
    description: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
        default: 0
    },
    price: {
        type: Number,
        required: true,
        default: 0
    },
    countInStock: {
        type: Number,
        required: true,
        default: 0
    },
    compareTo: {
        type: Number,
        required: true,
        default: true,
    },
    numberOfReviews: {
        type: Number,
        required: true,
        default: 1
    }
}, {
    timestamps: true
});

const Product = mongoose.model("Product", productSchema);

export default Product;