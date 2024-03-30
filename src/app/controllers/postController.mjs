import { validationErrorToObject } from "../../utils/utils.mjs";
import Post from "../models/Post.mjs";
import { body, matchedData, validationResult } from "express-validator";

const postController = {
  validation: [
    body("title").notEmpty().withMessage("Judul tidak boleh kosong"),
    body("price")
      .notEmpty()
      .withMessage("Harga tidak boleh kosong")
      .isDecimal()
      .withMessage("Harga harus berupa angka"),
    body("address").notEmpty().withMessage("Alamat tidak boleh kosong"),
    body("body").notEmpty().withMessage("Deskripsi tidak boleh kosong"),
  ],

  store: async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      const errorsObject = validationErrorToObject(errors.array());

      return res.status(400).send({
        status: "error",
        errors: errorsObject,
      });
    }

    const data = matchedData(req);
    const { title, price, address, body } = data;

    try {
      const newPost = new Post({ title, price, address, body, user: req.user });
      const savePost = await newPost.save();

      if (!savePost) throw new Error("Failed add post");

      res.status(200).send(savePost);
    } catch (error) {
      res.send(req.body);
    }
  },
};

export default postController;
