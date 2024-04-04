import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import Account from "../models/Account.mjs";
import User from "../models/User.mjs";
import { storage } from "../../firebase/firebase.mjs";

const userController = {
  currentUser: async (req, res) => {
    res.status(200).send({
      meta: {
        code: 200,
        status: "success",
        message: "Berhasil membuat akun",
      },
      data: {
        token: req.headers.authorization.split(" ")[1],
        tokenType: "Bearer",
        user: req.user,
      },
    });
  },
  update: async (req, res) => {
    try {
      // Update avatar
      const storageRef = ref(
        storage,
        `user/avatar/avatar-${Date.now()}-${req.file?.originalname}`
      );

      let updatedAvatar;

      if (req.file) {
        const metadata = {
          contentType: "image/jpeg",
        };

        const upload = await uploadBytes(
          storageRef,
          req.file?.buffer,
          metadata
        );
        if (!upload) throw new Error("Gagal mengubah avatar");

        updatedAvatar = await getDownloadURL(storageRef);
      }

      const updatedUser = {
        username: req.body.username,
        work: req.body.work,
      };

      if (updatedAvatar) {
        updatedUser.avatarUrl = updatedAvatar;
      }

      const updateUser = await User.findOneAndUpdate(
        { _id: req.params.id },
        updatedUser,
        { new: true }
      );

      const updateAccount = await Account.findOneAndUpdate(
        { _id: updateUser.accountId },
        {
          email: req.body.email,
          username: req.body.username,
        },
        { new: true }
      );

      if (!updateUser || !updateAccount)
        throw new Error("Gagal memperbaharui profil");

      res.status(200).send({
        meta: {
          code: 200,
          status: "success",
          message: "Berhasil memperbaharui profil",
        },
        data: {
          user: updateUser,
        },
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
  updatePoint: async (req, res) => {
    try {
      const updatePoint = await User.findOneAndUpdate(
        { _id: req.params.id },
        {
          point: req.body.point,
        },
        { new: true }
      );

      if (!updatePoint) throw new Error("Gagal menambah point");

      return res.status(200).send({
        meta: {
          code: 200,
          status: "success",
          message: "Point berhasil diperbaharui",
        },
        data: {
          user: updatePoint,
        },
      });
    } catch (error) {
      return res.status(400).send(error.message);
    }
  },
  leaderboard: async (req, res) => {
    try {
      const users = await User.find({})
        .sort({ point: "desc" })
        .select("username point");
      if (!users) throw new Error("Gagal mengambil data");

      return res.status(200).send({
        meta: {
          code: 200,
          status: "success",
        },
        data: {
          users,
        },
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
};

export default userController;
