import Recommendation from "../models/Recommendation.mjs";

const getRecommendation = async (aqi) => {
  try {
    const recommendation = await Recommendation.findOne({ aqi });
    if (!recommendation) throw new Error("Failed fetch recommendation");

    return recommendation;
  } catch (error) {
    console.log(error.message);
  }
};

const openWeatherController = {
  currentAirPollution: async (req, res) => {
    const { lat, lon } = req.query;

    try {
      const response = await fetch(
        `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${process.env.OPEN_WEATHER_KEY}`
      );
      if (!response.ok) throw new Error("Failed fetching data");
      const data = await response.json();

      const recommendation = await getRecommendation(data.list[0].main.aqi);

      const simData = {
        status: "success",
        air_pollution: {
          coord: data.coord,
          aqi: data.list[0].main.aqi,
          quality: recommendation.quality,
          components: data.list[0].components,
        },
        recommendation: recommendation.list.slice(0, 2),
      };

      return res.status(200).send(simData);
    } catch (error) {
      return res.status(400).send({ status: "error", message: error.message });
    }
  },
};

export default openWeatherController;
