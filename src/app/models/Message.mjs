import mongoose, { Schema } from "mongoose";

const messageSchema = new Schema(
  {
    chatRoom: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "ChatRoom",
    },
    sender: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Message = mongoose.model("Message", messageSchema);
export default Message;
