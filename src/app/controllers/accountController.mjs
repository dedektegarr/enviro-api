import { body, matchedData, validationResult } from "express-validator";
import { hashPassword, validationErrorToObject } from "../../utils/utils.mjs";
import Account from "../models/Account.mjs";
import User from "../models/User.mjs";

const accountController = {
  validation: [
    body("name").notEmpty().withMessage("Nama tidak boleh kosong"),

    body("email")
      .isEmail()
      .withMessage("Email tidak valid")
      .notEmpty()
      .withMessage("Email tidak boleh kosong")
      .custom(async (value) => {
        const user = await Account.findOne({ email: value });
        if (user) {
          throw new Error("Email sudah terdaftar");
        }
      }),

    body("password").notEmpty().withMessage("Password tidak boleh kosong"),
  ],

  register: async (req, res) => {
    // Check validation
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      const errorsObject = validationErrorToObject(errors.array());

      res.status(400).send({
        status: "error",
        errors: errorsObject,
      });
    }

    // Validated Data
    const data = matchedData(req);

    try {
      const hashedPassword = await hashPassword(data.password);

      const newAccount = new Account({
        email: data.email,
        password: hashedPassword,
      });

      const newUser = new User({
        name: data.name,
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
};

export default accountController;
