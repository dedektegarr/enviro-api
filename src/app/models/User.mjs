import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
    },
    accountId: {
      type: String,
      unique: true,
      required: true,
    },
    name: String,
    phone: String,
    address: String,
    work: String,
    point: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;
