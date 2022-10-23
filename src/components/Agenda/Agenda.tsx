import momentHijri from 'moment-hijri';

import AgendaItem from './AgendaItem';

const events = [
  {
    id: 0,
    title: 'Thursday Night Program',
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
    title: 'Thursday Night Program',
    start: new Date(2022, 10, 3, 19, 15, 0, 0),
    end: new Date(2022, 10, 3, 22, 30, 0, 0),
    desc: [
      '7:15pm – Salat, Ziarat E Warith, Sura Yasin, Dua Kumail, Majlis by Syed Asad Jafry and Ziarat. The program will be relayed online at jaffari.org/live.',
    ],
    live: true,
  },
  {
    id: 3,
    title: 'Wiladat of Imam Hassan Askari',
    start: new Date(2022, 10, 4, 19, 15, 0, 0),
    end: new Date(2022, 10, 4, 22, 30, 0, 0),
    desc: [
      '7:15pm – Salat, Ziarat E Warith, Sura Yasin, Dua Kumail, Majlis by Syed Asad Jafry and Ziarat. The program will be relayed online at jaffari.org/live.',
    ],
    live: true,
  },
];

momentHijri.locale('en');

function Agenda() {
  return (
    <div className="w-full flex justify-center content-center p-4">
      <div className="grid grid-cols-4 text-black max-w-2xl w-full text-center content-center justify-center">
        <div className="text-sm p-1 border-[#2a303c] border-l border-y">
          Date
        </div>
        <div className="text-sm p-1 border-[#2a303c] border-l border-y">
          Time
        </div>
        <div className="text-sm col-span-2 p-1 border border-[#2a303c]">
          Title
        </div>

        {events.map((event) => (
          <AgendaItem
            key={event.id}
            start={event.start}
            title={event.title}
            desc={event.desc}
            live={event.live}
          />
        ))}
      </div>
    </div>
  );
}

export default Agenda;
