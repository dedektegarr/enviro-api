import multer from "multer";
import { validationErrorToObject } from "../../utils/utils.mjs";
import Post from "../models/Post.mjs";
import { body, matchedData, validationResult } from "express-validator";
import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytes,
} from "firebase/storage";
import { storage } from "../../firebase/firebase.mjs";
import path from "path";

const postController = {
  // validation: [
  //   body("title").notEmpty().withMessage("Judul tidak boleh kosong"),
  //   body("price")
  //     .notEmpty()
  //     .withMessage("Harga tidak boleh kosong")
  //     .isDecimal()
  //     .withMessage("Harga harus berupa angka"),
  //   body("address").notEmpty().withMessage("Alamat tidak boleh kosong"),
  //   body("body").notEmpty().withMessage("Deskripsi tidak boleh kosong"),
  // ],

  store: async (req, res) => {
    const { title, price, body, address } = req.body;
    // const errors = validationResult(req);

    // if (!errors.isEmpty()) {
    //   const errorsObject = validationErrorToObject(errors.array());

    //   return res.status(400).send({
    //     status: "error",
    //     errors: errorsObject,
    //   });
    // }

    // const data = matchedData(req);
    // const { title, price, address, body } = data;

    try {
      // upload image
      const storageRef = ref(
        storage,
        `posts/post-${Date.now()}-${req.file.originalname}`
      );

      const metadata = {
        contentType: "image/jpeg",
      };

      const upload = await uploadBytes(storageRef, req.file.buffer, metadata);
      if (!upload) throw new Error("Gagal upload gambar");

      const imageUrl = await getDownloadURL(storageRef);

      const newPost = new Post({
        title,
        price,
        address,
        body,
        imageUrl,
        imagePath: upload.metadata.fullPath,
        user: req.user,
      });
      const savePost = await newPost.save();

      if (!savePost) throw new Error("Gagal menambah postingan");

      res.status(200).send({
        meta: {
          code: 200,
          status: "success",
          message: "Postingan anda berhasil dibuat",
        },
        data: {
          post: savePost,
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

  delete: async (req, res) => {
    try {
      const deletePost = await Post.findByIdAndDelete({ _id: req.params.id });
      if (!deletePost) throw new Error("Gagal menghapus postingan");

      const delRef = ref(storage, deletePost.imagePath);
      await deleteObject(delRef);

      return res.status(200).send({
        meta: {
          code: 200,
          status: "success",
          message: "Postingan berhasil dihapus",
        },
      });
    } catch (error) {
      return res.status(400).send({
        meta: {
          code: 400,
          status: "error",
          message: error.message,
        },
      });
    }
  },

  allPost: async (req, res) => {
    try {
      const posts = await Post.find({}).sort({ createdAt: "desc" });
      if (!posts) throw new Error("Gagal mengambil data");

      res.send({
        meta: {
          code: 200,
          status: "success",
        },
        data: {
          posts,
        },
      });
    } catch (error) {}
  },
};

export default postController;
