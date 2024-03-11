import mongoose from "mongoose";
import app from "./app.mjs";

const port = process.env.PORT || 3000;
const dbName = process.env.DB_NAME;
const dbConnection = process.env.DB_CONNECTION;

mongoose.connect(dbConnection + dbName).then(() => {
  console.log("DB Connected");

  app.listen(port, () => {
    console.log(`Listen on port ${port}`);
  });
});
