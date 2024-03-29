const openWeatherController = {
  currentAirPollution: async (req, res) => {
    const { lat, lon } = req.query;

    try {
      const response = await fetch(
        `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${process.env.OPEN_WEATHER_KEY}`
      );

      if (!response.ok) throw new Error("Failed fetching data");

      const data = await response.json();
      const simData = {
        status: "success",
        coord: data.coord,
        aqi: data.list[0].main.aqi,
        components: data.list[0].components,
      };

      return res.status(200).send(simData);
    } catch (error) {
      return res.status(400).send({ status: "error", message: error.message });
    }
  },
};

export default openWeatherController;
