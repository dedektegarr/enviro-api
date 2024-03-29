import { Router } from "express";
import openWeatherController from "../../app/controllers/openWeatherController.mjs";

const openWeatherRouter = Router();

openWeatherRouter.get(
  "/air_pollution",
  openWeatherController.currentAirPollution
);

export default openWeatherRouter;
