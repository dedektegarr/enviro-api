import { Router } from "express";
import userController from "../../app/controllers/userController.mjs";
import { isAuthenticated } from "../../middleware/authenticated.mjs";

const userRouter = Router();

userRouter.get("/", isAuthenticated, userController.currentUser);

export default userRouter;
