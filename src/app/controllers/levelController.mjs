import Level from "../models/Level.mjs";

const levelController = {
  getLevel: async (req, res) => {
    try {
      const levelList = await Level.find({}).select("imageUrl name");
      if (!levelList) throw new Error("Gagal menampilkan level");

      return res.send({
        meta: { code: 200, status: "success" },
        data: { levels: levelList },
      });
    } catch (error) {
      return res.send({
        meta: {
          code: 400,
          status: "error",
          message: error.message,
        },
        data: false,
      });
    }
  },
  getLevelDetail: async (req, res) => {
    try {
      const levelDetail = await Level.findOne({ _id: req.params.id });
      if (!levelDetail) throw new Error("Failed fetch level detail");

      res.send({
        meta: {
          code: 200,
          status: "success",
        },
        data: {
          level: levelDetail,
        },
      });
    } catch (error) {}
  },
};

export default levelController;
