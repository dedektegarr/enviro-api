import { Router } from "express";
import userController from "../../app/controllers/userController.mjs";

const userRouter = Router();

userRouter.get("/", userController.currentUser);

export default userRouter;
