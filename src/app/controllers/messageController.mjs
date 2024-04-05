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
        sender: req.user._id,
        content: req.body.content,
      });

      const sendMessage = await newMessage.save();

      if (!sendMessage) throw new Error("Gagal mengirim pesan");

      res.send({
        meta: {
          code: 200,
          status: "success",
          message: "Berhasil mengirim pesan",
        },
        data: sendMessage,
      });
    } catch (error) {
      res.send({
        meta: { code: 400, status: "error", message: error.message },
        data: false,
      });
    }
  },

  list: async (req, res) => {
    try {
      const chatList = await ChatRoom.find({ participants: req.user._id });
      if (!chatList) throw new Error("Gagal mengambil chat list");

      const chatRoomData = [];

      for (let chat of chatList) {
        // const receiverId = chat.participants.find(
        //   (id) => id.toString() !== req.user._id
        // );
        const receiverData = await User.findById(chat.participants[1]);
        const lastMessage = await Message.findOne({ chatRoom: chat._id }).sort({
          createdAt: -1,
        });

        chatRoomData.push({
          receiver: {
            username: receiverData.username,
            avatarUrl: receiverData.avatarUrl,
            id: receiverData._id,
          },
          content: lastMessage.content,
          createdAt: lastMessage.createdAt,
          _id: chat._id,
        });
      }

      res.send({
        meta: {
          code: 200,
          status: "success",
        },
        data: { chats: chatRoomData },
      });
    } catch (error) {
      res.send({
        meta: {
          code: 400,
          status: "error",
          message: error.message,
        },
        data: false,
      });
    }
  },

  chatRoom: async (req, res) => {
    try {
      const messages = await Message.find({ chatRoom: req.params.id }).sort({
        createdAt: "asc",
      });
      const chatRoom = await ChatRoom.findById(req.params.id);

      const senderId = chatRoom.participants.find(
        (id) => id.toString() !== req.user._id.toString()
      );

      const sender = await User.findById(senderId).select(
        "_id username avatarUrl point"
      );

      res.send({
        meta: { code: 200, status: "success" },
        data: { sender, messages },
      });
    } catch (error) {}
  },
};

export default messageController;
