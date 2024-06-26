import mongoose, { Schema } from "mongoose";

const chatRoomSchema = new Schema(
  {
    participants: [
      { type: Schema.Types.ObjectId, required: true, ref: "User" },
    ],
  },
  { timestamps: true }
);

const ChatRoom = mongoose.model("ChatRoom", chatRoomSchema);
export default ChatRoom;
