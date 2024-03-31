import { configDotenv } from "dotenv";
import express from "express";
import router from "./routes/api.mjs";
import bodyParser from "body-parser";
import passport from "passport";
import seedData from "./databases/seeds/seed.mjs";

const app = express();
configDotenv();

// seed data
// seedData();

// config
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());

// app.use("/", (req, res) => res.send("oke"));
app.use("/api/v1", router);

export default app;
