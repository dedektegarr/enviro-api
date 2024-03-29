import { Router } from "express";
import accountRouter from "./account/account.mjs";
import userRouter from "./user/user.mjs";

const router = Router();

// Account routes
router.use("/account", accountRouter);
router.use("/user", userRouter);

export default router;
