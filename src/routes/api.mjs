import { Router } from "express";
import accountRouter from "./account/account.mjs";
import userRouter from "./user/user.mjs";
import openWeatherRouter from "./openWeatherRouter/openWeatherRouter.mjs";
import { isAuthenticated } from "../middleware/authenticated.mjs";

const router = Router();

// Account routes
router.use("/account", accountRouter);

// === ONLY AUTHENTICATED USER ===
// User routes
router.use("/user", isAuthenticated, userRouter);

// Air pollution routes
router.use("/open_weather", isAuthenticated, openWeatherRouter);

export default router;
