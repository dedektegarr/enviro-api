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
        const user = await Account.findOne({ username: value });
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
    body("password_confirmation")
      .notEmpty()
      .withMessage("Konfirmasi password tidak boleh kosong")
      .custom((value, { req }) => value === req.body.password)
      .withMessage("Password tidak sesuai"),
  ],

  register: async (req, res) => {
    // Check validation
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      const errorsObject = validationErrorToObject(errors.array());

      return res.status(400).send({
        status: "error",
        errors: errorsObject,
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
      });
      const saveAccount = await newAccount.save();
      const saveUser = await newUser.save();

      if (!saveAccount || !saveUser) throw new Error("Gagal membuat akun");

      res.status(200).send({
        status: "success",
        message: "Berhasil membuat akun",
        data: saveAccount,
      });
    } catch (error) {
      res.status(400).send({ status: "error", message: error.message });
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

        if (passwordIsCorrect) {
          const token = jwt.sign({ sub: account._id }, process.env.SECRET_KEY);
          return res.status(200).send({ status: "success", token });
        }
      }

      throw new Error("Akun tidak ditemukan");
    } catch (error) {
      res.status(401).send({ status: "error", message: error.message });
    }
  },

  currentUser: async (req, res) =>
    res.status(200).send({ status: "success", user: req.user }),
};

export default accountController;
