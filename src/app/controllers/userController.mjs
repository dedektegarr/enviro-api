const userController = {
  currentUser: async (req, res) =>
    res.status(200).send({ status: "success", user: req.user }),
};

export default userController;
