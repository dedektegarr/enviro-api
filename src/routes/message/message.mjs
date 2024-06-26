import { Router } from "express";
import messageController from "../../app/controllers/messageController.mjs";

const messageRouter = Router();

messageRouter.post("/:id/new", messageController.create);
messageRouter.get("/list", messageController.list);
messageRouter.get("/:id", messageController.chatRoom);

export default messageRouter;
