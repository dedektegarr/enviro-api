import { Router } from "express";
import postController from "../../app/controllers/postController.mjs";

const postRouter = Router();

postRouter.post("/", postController.validation, postController.store);

export default postRouter;
