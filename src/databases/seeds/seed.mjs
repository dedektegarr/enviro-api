import seedLevelData from "./levelSeed.mjs";
import seedRecommendationData from "./recommendationSeed.mjs";

const seedData = () => {
  seedRecommendationData();
  seedLevelData();
};

export default seedData;
