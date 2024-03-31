import mongoose, { Schema } from "mongoose";

const levelSchema = new Schema({
  imageUrl: String,
  name: String,
  description: String,
  questions: [{ text: String, answers: [] }],
});

const Level = mongoose.model("Level", levelSchema);
export default Level;
