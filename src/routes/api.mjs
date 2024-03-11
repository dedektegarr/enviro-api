import { Router } from "express";
import accountRouter from "./account/account.mjs";

const router = Router();

// Account routes
router.use("/account", accountRouter);

export default router;
