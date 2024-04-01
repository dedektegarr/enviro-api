import { Router } from "express";
import userController from "../../app/controllers/userController.mjs";
import multer, { memoryStorage } from "multer";

const userRouter = Router();

const upload = multer({ storage: memoryStorage() });

userRouter.get("/", userController.currentUser);
userRouter.patch("/:id/update", upload.single("avatar"), userController.update);
userRouter.patch("/:id/point", userController.updatePoint);

export default userRouter;
