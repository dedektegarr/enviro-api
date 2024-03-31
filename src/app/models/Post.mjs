import mongoose, { Schema } from "mongoose";

const postSchema = new Schema(
  {
    title: String,
    price: Number,
    address: String,
    body: String,
    imagePath: String,
    imageUrl: String,
    user: {
      name: String,
      username: String,
      _id: String,
    },
  },
  { timestamps: true }
);

const Post = mongoose.model("Post", postSchema);
export default Post;
