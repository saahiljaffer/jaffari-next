import { Button } from "react-daisyui";

import { Event } from "./Event";

const events = [
  {
    id: 0,
    title: "Thursday Night",
    start: new Date(2022, 9, 27, 19, 15, 0, 0),
    end: new Date(2022, 9, 27, 22, 30, 0, 0),
    desc: [
      "7:15pm – Salat, Ziarat E Warith, Sura Yasin, Dua Kumail, Majlis by Syed Asad Jafry and Ziarat.",
    ],
    live: true,
  },
  {
    id: 1,
    title: "Jumuah",
    start: new Date(2022, 9, 28, 12, 30, 0, 0),
    end: new Date(2022, 9, 28, 14, 30, 0, 0),
    desc: [
      "12:30pm – Du’ā-e-Nudba.",
      "1:02pm – Jumu’ah Salāt led by Maulana Sayyid Muhammad Rizvi,  followed by Friday Ziyārat.",
    ],
    live: true,
  },
  {
    id: 2,
    title: "Thursday Night",
    start: new Date(2022, 10, 3, 19, 15, 0, 0),
    end: new Date(2022, 10, 3, 22, 30, 0, 0),
    desc: [
      "7:15pm – Salat, Ziarat E Warith, Sura Yasin, Dua Kumail, Majlis by Syed Asad Jafry and Ziarat.",
    ],
    live: true,
  },
  {
    id: 3,
    title: "Wiladat of Imam Hassan Askari",
    start: new Date(2022, 10, 4, 19, 15, 0, 0),
    end: new Date(2022, 10, 4, 22, 30, 0, 0),
    desc: [
      "7:15pm – Salat, Ziarat E Warith, Sura Yasin, Dua Kumail, Majlis by Syed Asad Jafry and Ziarat.",
    ],
    live: true,
  },
];

// momentHijri.locale("en");

function UpcomingEvents() {
  return (
    <div className="flex w-full justify-center">
      <div className="flex w-full max-w-2xl flex-col place-items-center gap-8 bg-white py-10 px-4">
        <h2 className="text-center font-semibold">Upcoming Events</h2>
        <div className="flex w-full flex-col content-center justify-center gap-2">
          {events.map((event) => (
            <Event
              key={event.id}
              title={event.title}
              description={event.desc}
            />
          ))}
        </div>
        <Button color="primary" fullWidth href="/jcc/events">
          Full Calendar
        </Button>
      </div>
    </div>
  );
}

export { UpcomingEvents };
