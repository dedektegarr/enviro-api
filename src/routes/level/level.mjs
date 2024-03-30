import { Router } from "express";
import levelController from "../../app/controllers/levelController.mjs";

const levelRouter = Router();

levelRouter.get("/", levelController.getLevel);
levelRouter.get("/:level", levelController.getLevelDetail);

export default levelRouter;
