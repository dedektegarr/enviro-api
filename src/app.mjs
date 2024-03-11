import { configDotenv } from "dotenv";
import express from "express";
import router from "./routes/api.mjs";
import bodyParser from "body-parser";

const app = express();
configDotenv();

// config
app.use(bodyParser.json());

app.use("/api/v1", router);

export default app;
