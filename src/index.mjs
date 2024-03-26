import { configDotenv } from "dotenv";
import express from "express";
import router from "./routes/api.mjs";
import bodyParser from "body-parser";
import passport from "passport";

const app = express();
configDotenv();

// config
app.use(bodyParser.json());
app.use(passport.initialize());

// app.use("/", (req, res) => res.send("oke"));
app.use("/api/v1", router);

export default app;
