import { Router } from "express";
import levelController from "../../app/controllers/levelController.mjs";

const levelRouter = Router();

levelRouter.get("/", levelController.getLevel);
levelRouter.get("/:id", levelController.getLevelDetail);

export default levelRouter;
