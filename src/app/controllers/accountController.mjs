const accountController = {
  register: (req, res) => {
    const { body } = req;

    res.send(body);
  },
};

export default accountController;
