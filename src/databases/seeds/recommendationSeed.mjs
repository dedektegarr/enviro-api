import Recommendation from "../../app/models/Recommendation.mjs";

const dumyRecommendation = [
  {
    aqi: 5,
    list: [
      "Hindari kegiatan di luar ruangan",
      "Gunakan masker anti polusi",
      "Gunakan alat penyaring udara dalam ruangan",
      "Hindari perjalanan yang tidak penting",
      "Periksa kualitas udara dalam ruangan secara berkala",
    ],
  },
  {
    aqi: 4,
    list: [
      "Batasi aktivitas di luar ruangan",
      "Periksa kualitas udara dalam ruangan",
      "Gunakan masker anti polusi jika berada di luar ruangan",
      "Hindari berolahraga di luar ruangan",
      "Gunakan alat penyaring udara dalam ruangan",
    ],
  },
  {
    aqi: 3,
    list: [
      "Kurangi aktivitas di luar ruangan",
      "Periksa kondisi kesehatan secara rutin",
      "Gunakan masker anti polusi jika berada di luar ruangan",
      "Gunakan alat penyaring udara dalam ruangan",
      "Hindari tempat yang ramai",
    ],
  },
  {
    aqi: 2,
    list: [
      "Periksa kualitas udara dalam ruangan",
      "Hindari tempat yang berpolusi",
      "Jaga kebersihan ruangan",
      "Hindari menggunakan transportasi umum",
      "Minimalkan kegiatan di luar ruangan",
    ],
  },
  {
    aqi: 1,
    list: [
      "Gunakan alat penyaring udara dalam ruangan",
      "Buka jendela untuk sirkulasi udara",
      "Periksa kualitas udara dalam ruangan secara berkala",
      "Hindari berada di dekat area berpolusi",
      "Lakukan aktivitas di dalam ruangan",
    ],
  },
];

const seedRecommendationData = async () => {
  try {
    const data = await Recommendation.insertMany(dumyRecommendation);
    if (!data) throw new Error("Failed insert data");

    console.log("Recommendation has been inserted");
  } catch (error) {
    console.log(error.message);
  }
};

export default seedRecommendationData;
