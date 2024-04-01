import { Router } from "express";
import userController from "../../app/controllers/userController.mjs";

const userRouter = Router();

userRouter.get("/", userController.currentUser);
userRouter.patch("/:id/point", userController.updatePoint);

export default userRouter;
