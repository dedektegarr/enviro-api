import Level from "../../app/models/Level.mjs";

const dummyLevel = [
  {
    imageUrl: 1,
    name: "Dampak Kendaraan BBM",
    description:
      "Penggunaan kendaraan berbahan bakar minyak (BBM) berkontribusi pada polusi udara dan pemanasan global karena emisi gas rumah kaca seperti karbon dioksida (CO2), nitrogen oksida (NOx), dan partikel halus. Ini mengakibatkan dampak negatif pada lingkungan dan kesehatan manusia, termasuk masalah pernapasan, penyakit jantung, dan bahkan kematian. Beralih ke kendaraan berbahan bakar alternatif seperti kendaraan listrik dapat membantu mengurangi ketergantungan pada BBM dan mengurangi emisi polutan udara, memberikan manfaat langsung bagi kualitas udara dan kesehatan manusia, terutama di daerah perkotaan yang padat penduduk.",
    questions: [
      {
        text: "Apa yang menjadi penyebab utama polusi udara dari kendaraan berbahan bakar minyak (BBM)?",
        answers: [
          "Emisi gas rumah kaca (CO2)",
          "Emisi gas karbon monoksida (CO)",
          "Emisi gas nitrogen oksida (NOx)",
        ],
      },
      {
        text: "Bagaimana cara mengurangi emisi polutan udara dari kendaraan berbahan bakar minyak (BBM)?",
        answers: [
          "Menggunakan kendaraan dengan teknologi emisi yang lebih baik",
          "Memperbanyak penggunaan kendaraan pribadi",
          "Menggunakan bahan bakar berkualitas rendah",
        ],
      },
      {
        text: "Apa yang dimaksud dengan konversi kendaraan berbahan bakar minyak (BBM) ke kendaraan listrik?",
        answers: [
          "Mengubah kendaraan agar dapat menggunakan listrik sebagai sumber tenaga utama",
          "Mengubah kendaraan agar dapat menggunakan dua jenis bahan bakar",
          "Mengubah kendaraan agar lebih hemat bahan bakar",
        ],
      },
      {
        text: "Apa manfaat utama penggunaan kendaraan listrik dibandingkan kendaraan berbahan bakar minyak (BBM)?",
        answers: [
          "Mengurangi emisi gas rumah kaca",
          "Lebih murah biaya perawatan",
          "Lebih tinggi konsumsi bahan bakar",
        ],
      },
      {
        text: "Apa yang dapat dilakukan untuk mendorong penggunaan kendaraan berbahan bakar alternatif yang lebih ramah lingkungan?",
        answers: [
          "Memberikan insentif bagi pembelian kendaraan berbahan bakar alternatif",
          "Memperketat regulasi emisi kendaraan berbahan bakar minyak (BBM)",
          "Memperbanyak produksi kendaraan berbahan bakar minyak (BBM)",
        ],
      },
    ],
  },
  {
    imageUrl: 2,
    name: "Pengelolaan Sampah",
    description:
      "Pengelolaan sampah yang efektif sangat penting untuk menjaga lingkungan dan kesehatan masyarakat. Dengan daur ulang dan penggunaan kembali sampah, kita dapat mengurangi pencemaran udara, air, dan tanah serta mengonservasi sumber daya alam. Prinsip-prinsip 3R (Reduce, Reuse, Recycle) membantu mengurangi jumlah sampah yang masuk ke tempat pembuangan akhir, mengurangi dampak negatifnya. Pengelolaan sampah yang buruk dapat menyebabkan penumpukan sampah, menyebarkan penyakit, dan mencemari air dan udara. Tanggung jawab pengelolaan sampah bukan hanya pemerintah, tapi juga individu untuk menjaga kelestarian lingkungan.",
    questions: [
      {
        text: "Apa yang dimaksud dengan konsep 3R dalam pengelolaan sampah?",
        answers: [
          "Recycle, Reuse, Reduce",
          "Reduce, Reuse, Replant",
          "Recycle, Reuse, Regrow",
        ],
      },
      {
        text: "Bagaimana cara terbaik untuk mengurangi sampah plastik di lingkungan?",
        answers: [
          "Menggunakan kantong belanja kain yang dapat digunakan berulang kali",
          "Menggunakan kantong plastik sekali pakai",
          "Membuang plastik sembarangan",
        ],
      },
      {
        text: "Mengapa daur ulang penting dalam pengelolaan sampah?",
        answers: [
          "Mengurangi konsumsi bahan baku baru",
          "Mengurangi pencemaran udara",
          "Meningkatkan pertumbuhan tanaman",
        ],
      },
      {
        text: "Apa yang dapat dilakukan untuk mengurangi pembakaran sampah yang merugikan lingkungan?",
        answers: [
          "Memilah sampah organik dan anorganik, lalu mengolahnya secara benar",
          "Membakar sampah di tempat pembakaran terbuka",
          "Menggunakan incinerator untuk membakar sampah",
        ],
      },
      {
        text: "Bagaimana peran individu dalam pengelolaan sampah untuk kelestarian lingkungan?",
        answers: [
          "Mempraktikkan pengelolaan sampah yang ramah lingkungan di rumah dan lingkungan sekitar",
          "Tidak ada peran individu dalam pengelolaan sampah",
          "Membiarkan pemerintah menangani masalah sampah",
        ],
      },
    ],
  },
  {
    imageUrl: 3,
    name: "Konservasi Energi",
    description:
      "Konservasi energi adalah praktik mengurangi penggunaan energi dengan meminimalkan pemborosan dan mengadopsi teknologi yang lebih efisien. Penghematan energi dapat menyebabkan berkurangnya biaya, serta meningkatnya nilai lingkungan, keamanan negara, keamanan pribadi, serta kenyamanan. Ini membantu mengurangi jejak karbon dan menjaga sumber daya alam yang terbatas.",
    questions: [
      {
        text: "Apa saja langkah-langkah sederhana yang dapat dilakukan untuk menghemat energi di rumah?",
        answers: [
          "Mematikan lampu dan perangkat elektronik saat tidak digunakan",
          "Menggunakan banyak perangkat elektronik sekaligus",
          "Meningkatkan konsumsi listrik",
        ],
      },
      {
        text: "Mengapa penting mengurangi penggunaan listrik dan air?",
        answers: [
          "Untuk mengurangi biaya tagihan listrik dan air",
          "Untuk meningkatkan konsumsi sumber daya alam",
          "Untuk menjaga lingkungan dan mengurangi dampak negatifnya",
        ],
      },
      {
        text: "Bagaimana teknologi hemat energi seperti lampu LED dapat membantu lingkungan?",
        answers: [
          "Dengan menggunakan energi lebih efisien dan mengurangi emisi karbon",
          "Dengan meningkatkan konsumsi energi",
          "Dengan menghasilkan lebih banyak panas",
        ],
      },
      {
        text: "Apa manfaat dari menggunakan energi terbarukan?",
        answers: [
          "Mengurangi ketergantungan pada bahan bakar fosil",
          "Meningkatkan emisi karbon",
          "Menambahkan polusi udara",
        ],
      },
      {
        text: "Bagaimana mendidik generasi muda tentang pentingnya konservasi energi?",
        answers: [
          "Mengadakan program pendidikan dan kesadaran tentang konservasi energi",
          "Tidak memberikan pendidikan tentang konservasi energi",
          "Mengabaikan pentingnya konservasi energi",
        ],
      },
    ],
  },
  {
    imageUrl: 4,
    name: "Dampak Polusi Udara",
    description:
      "Polusi udara memiliki dampak yang serius terhadap kesehatan manusia, lingkungan, dan ekonomi. Dampaknya dapat berupa masalah pernapasan, kerusakan lingkungan, dan berkurangnya produktivitas. Berbagai langkah telah diambil untuk mengurangi polusi udara, termasuk penggunaan energi terbarukan, transportasi berkelanjutan, dan pengendalian emisi industri.",
    questions: [
      {
        text: "Apa dampak utama polusi udara terhadap kesehatan manusia?",
        answers: [
          "Gangguan pernapasan",
          "Gangguan pencernaan",
          "Gangguan kulit",
        ],
      },
      {
        text: "Bagaimana polusi udara dapat merusak lingkungan?",
        answers: [
          "Merusak lapisan ozon",
          "Meningkatkan keanekaragaman hayati",
          "Meningkatkan kualitas tanah",
        ],
      },
      {
        text: "Apa salah satu cara mengurangi polusi udara di transportasi?",
        answers: [
          "Menggunakan transportasi berkelanjutan",
          "Menggunakan bahan bakar fosil",
          "Membakar sampah",
        ],
      },
    ],
  },
  {
    imageUrl: 5,
    name: "Teknologi Hijau untuk Mengatasi Polusi",
    description:
      "Perkembangan teknologi hijau telah menjadi solusi penting dalam mengatasi polusi udara. Teknologi seperti kendaraan listrik, energi surya, dan penggunaan bahan ramah lingkungan membantu industri merupakan salah satu penyumbang utama polusi udara. Penggunaan bahan bakar fosil, limbah industri, dan polusi udara dari proses produksi merupakan masalah yang harus diatasi. Pemerintah memiliki peran penting dalam mengatasi polusi udara melalui regulasi, kebijakan lingkungan, dan insentif untuk teknologi bersih. Keterlibatan pemerintah sangat diperlukan.",
    questions: [
      {
        text: "Apa contoh teknologi hijau yang dapat membantu mengurangi polusi udara di transportasi?",
        answers: [
          "Kendaraan listrik",
          "Penggunaan bahan bakar fosil",
          "Penggunaan transportasi umum",
        ],
      },
      {
        text: "Bagaimana energi surya dapat membantu mengurangi polusi udara?",
        answers: [
          "Mengurangi penggunaan bahan bakar fosil",
          "Menghasilkan emisi gas rumah kaca",
          "Meningkatkan polusi udara di siang hari",
        ],
      },
      {
        text: "Apa yang menjadi penyumbang utama polusi udara dari industri?",
        answers: [
          "Penggunaan bahan bakar fosil",
          "Penggunaan energi terbarukan",
          "Penggunaan limbah organic",
        ],
      },
      {
        text: "Apa yang dapat dilakukan pemerintah untuk mengatasi polusi udara?",
        answers: [
          "Menerapkan kebijakan yang mengurangi emisi industri",
          "Meningkatkan penggunaan bahan bakar fosil",
          "Mengabaikan isu lingkungan",
        ],
      },
    ],
  },
];

const seedLevelData = async () => {
  try {
    const data = await Level.insertMany(dummyLevel);
    if (!data) throw new Error("Failed insert data");

    console.log("Level has been inserted");
  } catch (error) {
    console.log(error.message);
  }
};

export default seedLevelData;
