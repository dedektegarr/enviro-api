import mongoose, { Schema } from "mongoose";

const messageSchema = new Schema({
  chatRoom: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "ChatRoom",
  },
  content: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now(),
  },
});

const Message = mongoose.model("Message", messageSchema);
export default Message;
