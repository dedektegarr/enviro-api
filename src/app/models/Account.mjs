import mongoose, { Schema } from "mongoose";

const accountSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: true,
    validate: {
      validator: function (value) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      },
      message: "Invalid email address format",
    },
  },
  password: {
    type: String,
    required: true,
  },
});

const Account = mongoose.model("Account", accountSchema);
export default Account;
