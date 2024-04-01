import User from "../models/User.mjs";

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
};

export default userController;
