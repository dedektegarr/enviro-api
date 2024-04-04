import { body, matchedData, validationResult } from "express-validator";
import {
  comparePassword,
  hashPassword,
  validationErrorToObject,
} from "../../utils/utils.mjs";
import jwt from "jsonwebtoken";
import Account from "../models/Account.mjs";
import User from "../models/User.mjs";

const accountController = {
  validation: [
    body("username")
      .notEmpty()
      .withMessage("Username tidak boleh kosong")
      .isLength({ min: 3, max: 20 })
      .withMessage("Username harus memiliki panjang antara 3-20 karakter")
      .matches(/^[a-zA-Z0-9_.]+$/)
      .withMessage("Username hanya boleh berisi huruf, dan angka")
      .custom(async (value) => {
        const user = await Account.findOne({ username: value.toLowerCase() });
        if (user) {
          throw new Error(`Username ${value} sudah terdaftar`);
        }
      }),

    body("email")
      .isEmail()
      .withMessage("Email tidak valid")
      .notEmpty()
      .withMessage("Email tidak boleh kosong")
      .custom(async (value) => {
        const user = await Account.findOne({ email: value });
        if (user) {
          throw new Error(`Email ${value} sudah terdaftar`);
        }
      }),

    body("password").notEmpty().withMessage("Password tidak boleh kosong"),
    // body("password_confirmation")
    //   .notEmpty()
    //   .withMessage("Konfirmasi password tidak boleh kosong")
    //   .custom((value, { req }) => value === req.body.password)
    //   .withMessage("Password tidak sesuai"),
  ],

  register: async (req, res) => {
    // Check validation
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      const errorsObject = validationErrorToObject(errors.array());

      return res.status(400).send({
        meta: {
          code: 400,
          status: "error",
          errors: errorsObject,
        },
        data: false,
      });
    }

    // Validated Data
    const data = matchedData(req);

    try {
      const hashedPassword = await hashPassword(data.password);

      const newAccount = new Account({
        username: data.username.toLowerCase(),
        email: data.email,
        password: hashedPassword,
      });

      const newUser = new User({
        username: newAccount.username,
        accountId: newAccount._id,
        avatarUrl:
          "https://firebasestorage.googleapis.com/v0/b/enviro-db8b4.appspot.com/o/assets%2Fdefault-avatar.png?alt=media&token=f45d5e8d-eab3-4c92-bec8-b771ff6cc26d",
      });
      const saveAccount = await newAccount.save();
      const saveUser = await newUser.save();

      if (!saveAccount || !saveUser) throw new Error("Gagal membuat akun");

      const token = jwt.sign({ sub: saveAccount._id }, process.env.SECRET_KEY);

      const currentUser = {
        _id: saveUser._id,
        username: saveAccount.username,
        email: saveAccount.email,
        work: saveUser.work,
        point: saveUser.point,
        password: saveAccount.password,
        avatarUrl: saveUser.avatarUrl,
      };

      res.status(200).send({
        meta: {
          code: 200,
          status: "success",
          message: "Berhasil membuat akun",
        },
        data: {
          token,
          tokenType: "Bearer",
          user: currentUser,
        },
      });
    } catch (error) {
      res.status(400).send({
        meta: {
          code: 400,
          status: "error",
          message: error.message,
        },
        data: false,
      });
    }
  },

  login: async (req, res) => {
    const { emailOrUsername, password } = req.body;

    try {
      const account = await Account.findOne({
        $or: [
          { email: emailOrUsername.toLowerCase() },
          { username: emailOrUsername.toLowerCase() },
        ],
      });

      if (account) {
        const passwordIsCorrect = await comparePassword(
          password,
          account.password
        );

        const user = await User.findOne({ accountId: account._id });

        const currentUser = {
          _id: user._id,
          username: account.username,
          email: account.email,
          work: user.work,
          point: user.point,
          password: account.password,
          avatarUrl: user.avatarUrl,
        };

        if (passwordIsCorrect) {
          const token = jwt.sign({ sub: account._id }, process.env.SECRET_KEY);
          return res.status(200).send({
            meta: {
              code: 200,
              status: "success",
              message: "Berhasil membuat akun",
            },
            data: {
              token,
              tokenType: "Bearer",
              user: currentUser,
            },
          });
        }
      }

      throw new Error("Akun tidak ditemukan");
    } catch (error) {
      res.status(401).send({
        meta: {
          code: 401,
          status: "error",
          message: error.message,
        },
        data: false,
      });
    }
  },
};

export default accountController;
