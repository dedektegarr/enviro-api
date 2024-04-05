import ChatRoom from "../models/ChatRoom.mjs";
import Message from "../models/Message.mjs";
import User from "../models/User.mjs";

const messageController = {
  create: async (req, res) => {
    try {
      const senderId = req.user._id;
      const receiverId = req.params.id;

      const existingChatRoom = await ChatRoom.findOne({
        participants: { $all: [senderId, receiverId] },
      });

      let newChatRoomId;
      if (!existingChatRoom) {
        const newChatRoom = new ChatRoom({
          participants: [senderId, receiverId],
        });

        const saveChatRoom = await newChatRoom.save();
        newChatRoomId = saveChatRoom._id;
      }

      const newMessage = new Message({
        chatRoom: existingChatRoom ? existingChatRoom._id : newChatRoomId,
        content: req.body.content,
      });

      const sendMessage = await newMessage.save();

      if (!sendMessage) throw new Error("Gagal mengirim pesan");

      res.send("oke");
    } catch (error) {
      res.send(error.message);
    }
  },

  list: async (req, res) => {
    try {
      const chatList = await ChatRoom.find({ participants: req.user._id });
      if (!chatList) throw new Error("Gagal mengambil chat list");

      const chatRoomData = [];

      for (let chat of chatList) {
        const receiverId = chat.participants.find(
          (id) => id.toString() !== req.user._id.toString()
        );
        const receiverData = await User.findById(receiverId);
        const lastMessage = await Message.findOne({ chatRoom: chat._id }).sort({
          timestamp: -1,
        });

        chatRoomData.push({
          receiver: { username: receiverData.username, id: receiverData._id },
          content: lastMessage.content,
          timestamp: lastMessage.timestamp,
        });
      }

      res.send({
        meta: {
          code: 200,
          status: "success",
        },
        data: { chats: chatRoomData },
      });
    } catch (error) {}
  },
};

export default messageController;
