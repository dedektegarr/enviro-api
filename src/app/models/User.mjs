import { Schema } from "mongoose";

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  accountId: {
    type: String,
    unique: true,
  },
});

const User = mongoose.model("User", userSchema);
export default User;
