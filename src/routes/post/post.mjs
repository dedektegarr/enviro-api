import { Router } from "express";
import postController from "../../app/controllers/postController.mjs";

const postRouter = Router();

postRouter.post("/", postController.validation, postController.store);
postRouter.delete("/:id", postController.delete);

export default postRouter;
