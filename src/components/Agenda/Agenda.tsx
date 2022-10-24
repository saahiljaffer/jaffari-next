import momentHijri from 'moment-hijri';

import { AgendaItem } from './AgendaItem';

const events = [
  {
    id: 0,
    title: 'Thursday Night',
    start: new Date(2022, 9, 27, 19, 15, 0, 0),
    end: new Date(2022, 9, 27, 22, 30, 0, 0),
    desc: [
      '7:15pm – Salat, Ziarat E Warith, Sura Yasin, Dua Kumail, Majlis by Syed Asad Jafry and Ziarat.',
    ],
    live: true,
  },
  {
    id: 1,
    title: 'Jumuah',
    start: new Date(2022, 9, 28, 12, 30, 0, 0),
    end: new Date(2022, 9, 28, 14, 30, 0, 0),
    desc: [
      '12:30pm – Du’ā-e-Nudba.',
      '1:02pm – Jumu’ah Salāt led by Maulana Sayyid Muhammad Rizvi,  followed by Friday Ziyārat.',
    ],
    live: true,
  },
  {
    id: 2,
    title: 'Thursday Night',
    start: new Date(2022, 10, 3, 19, 15, 0, 0),
    end: new Date(2022, 10, 3, 22, 30, 0, 0),
    desc: [
      '7:15pm – Salat, Ziarat E Warith, Sura Yasin, Dua Kumail, Majlis by Syed Asad Jafry and Ziarat.',
    ],
    live: true,
  },
  {
    id: 3,
    title: 'Wiladat of Imam Hassan Askari',
    start: new Date(2022, 10, 4, 19, 15, 0, 0),
    end: new Date(2022, 10, 4, 22, 30, 0, 0),
    desc: [
      '7:15pm – Salat, Ziarat E Warith, Sura Yasin, Dua Kumail, Majlis by Syed Asad Jafry and Ziarat.',
    ],
    live: true,
  },
];

momentHijri.locale('en');

function Agenda() {
  return (
    <div className="py-10 w-full flex flex-col justify-center place-items-center p-4">
      <h2 className="text-black mb-2 max-w-2xl font-semibold">
        Upcoming Events
      </h2>
      <div className="flex flex-col gap-2 text-black max-w-2xl w-full content-center justify-center">
        {events.map((event) => (
          <AgendaItem key={event.id} title={event.title} desc={event.desc} />
        ))}
      </div>
    </div>
  );
}

export { Agenda };
