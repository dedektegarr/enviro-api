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
};

export default userController;
