import Recommendation from "../../app/models/Recommendation.mjs";

const dummyRecommendation = [
  {
    aqi: 5,
    quality: "Sangat Buruk",
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
    quality: "Buruk",
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
    quality: "Sedang",
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
    quality: "Baik",
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
    quality: "Sangat Baik",
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
    const data = await Recommendation.insertMany(dummyRecommendation);
    if (!data) throw new Error("Failed insert data");

    console.log("Recommendation has been inserted");
  } catch (error) {
    console.log(error.message);
  }
};

export default seedRecommendationData;
