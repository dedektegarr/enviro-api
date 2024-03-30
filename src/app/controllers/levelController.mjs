import Level from "../models/Level.mjs";

const levelController = {
  getLevel: async (req, res) => {
    try {
      const levelList = await Level.find({}).select("level name");
      if (!levelList) throw new Error("Failed fetching levels");

      return res.send({ status: "success", levels: levelList });
    } catch (error) {
      return res.send({ status: "error", message: error.message });
    }
  },
  getLevelDetail: async (req, res) => {
    try {
      const levelDetail = await Level.findOne({ level: req.params.level });
      if (!levelDetail) throw new Error("Failed fetch level detail");

      res.send({ status: "success", level: levelDetail });
    } catch (error) {}
  },
};

export default levelController;
