import mongoose, { Schema } from "mongoose";

const recommendationSchema = new Schema({
  aqi: {
    type: Number,
    required: true,
  },
  quality: String,
  list: [],
});

const Recommendation = mongoose.model("Recommendation", recommendationSchema);
export default Recommendation;
