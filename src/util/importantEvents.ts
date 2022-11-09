import momentHijri from "moment-hijri";

import islamicOccasions from "./islamicOccasions.json";

const events = [
  {
    id: 0,
    title: "Thursday Night",
    start: new Date(2022, 10, 10, 19, 15, 0, 0),
    end: new Date(2022, 10, 10, 22, 30, 0, 0),
    desc: [
      "7:15pm – Salat, Ziarat E Warith, Sura Yasin, Dua Kumail, Majlis by Syed Asad Jafry and Ziarat.",
    ],
    live: true,
    category: "jcc",
  },
  {
    id: 0,
    title: "Thursday Night",
    start: new Date(2022, 10, 10, 19, 15, 0, 0),
    end: new Date(2022, 10, 10, 22, 30, 0, 0),
    desc: [
      "7:15pm – Salat, Ziarat E Warith, Sura Yasin, Dua Kumail, Majlis by Syed Asad Jafry and Ziarat.",
    ],
    live: true,
    category: "jcc",
  },
  {
    id: 0,
    title: "Thursday Night",
    start: new Date(2022, 10, 10, 19, 15, 0, 0),
    end: new Date(2022, 10, 10, 22, 30, 0, 0),
    desc: [
      "7:15pm – Salat, Ziarat E Warith, Sura Yasin, Dua Kumail, Majlis by Syed Asad Jafry and Ziarat.",
    ],
    live: true,
    category: "jcc",
  },
  {
    id: 1,
    title: "Jumuah",
    start: new Date(2022, 10, 11, 12, 30, 0, 0),
    end: new Date(2022, 10, 11, 14, 30, 0, 0),
    desc: [
      "12:30pm – Du’ā-e-Nudba.",
      "1:02pm – Jumu’ah Salāt led by Maulana Sayyid Muhammad Rizvi,  followed by Friday Ziyārat.",
    ],
    live: true,
    category: "jcc",
  },
  {
    id: 2,
    title: "Thursday Night",
    start: new Date(2022, 10, 17, 19, 15, 0, 0),
    end: new Date(2022, 10, 17, 22, 30, 0, 0),
    desc: [
      "7:15pm – Salat, Ziarat E Warith, Sura Yasin, Dua Kumail, Majlis by Syed Asad Jafry and Ziarat.",
    ],
    live: true,
    category: "jcc",
  },
];

islamicOccasions.forEach((occasion) => {
  let startDate = momentHijri(`1444/${occasion.date}`, "iYYYY/iM/iD");
  if (!startDate.isValid()) {
    startDate = momentHijri(`1444/${occasion.fallbackDate}`, "iYYYY/iM/iD");
  }
  const endDate = startDate.clone().add(1, "d");

  events.push({
    id: 0,
    title: occasion.title,
    start: startDate.toDate(),
    end: endDate.toDate(),
    desc: [occasion.title],
    live: true,
    category: "islamic",
  });
});

export { events };
