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
    name: { type: String, default: "" },
    phone: { type: String, default: "" },
    address: { type: String, default: "" },
    work: { type: String, default: "" },
    point: {
      type: Number,
      default: 0,
    },
    avatarUrl: String,
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;
