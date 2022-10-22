import 'react-big-calendar/lib/css/react-big-calendar.css';

import moment from 'moment';
import momentHijri from 'moment-hijri';
import { useEffect, useMemo, useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';

const events = [
  {
    id: 0,
    title: 'Thursday Night Program',
    start: new Date(2022, 9, 27, 19, 15, 0, 0),
    end: new Date(2022, 9, 27, 22, 30, 0, 0),
    desc: '7:15pm – Salat, Ziarat E Warith, Sura Yasin, Dua Kumail, Majlis by Syed Asad Jafry and Ziarat. The program will be relayed online at jaffari.org/live.',
  },
  {
    id: 1,
    title: 'Jumuah',
    start: new Date(2022, 9, 28, 12, 30, 0, 0),
    end: new Date(2022, 9, 28, 14, 30, 0, 0),
    desc: '12:30pm – Du’ā-e-Nudba. 1:02pm – Jumu’ah Salāt led by Maulana Sayyid Muhammad Rizvi,  followed by Friday Ziyārat.The program will be relayed online at jaffari.org/live.',
  },
  {
    id: 2,
    title: 'Thursday Night Program',
    start: new Date(2022, 10, 3, 19, 15, 0, 0),
    end: new Date(2022, 10, 3, 22, 30, 0, 0),
    desc: '7:15pm – Salat, Ziarat E Warith, Sura Yasin, Dua Kumail, Majlis by Syed Asad Jafry and Ziarat. The program will be relayed online at jaffari.org/live.',
  },
  {
    id: 3,
    title: 'Wiladat of Imam Hassan Askari',
    start: new Date(2022, 10, 4, 19, 15, 0, 0),
    end: new Date(2022, 10, 4, 22, 30, 0, 0),
    desc: '7:15pm – Salat, Ziarat E Warith, Sura Yasin, Dua Kumail, Majlis by Syed Asad Jafry and Ziarat. The program will be relayed online at jaffari.org/live.',
  },
];

const mLocalizer = momentLocalizer(moment);
// const hijriLocalizer = momentLocalizer(momentHijri);
momentHijri.locale('en');
// const ColoredDateCellWrapper = ({ children }: { children: any }) =>
//   React.cloneElement(React.Children.only(children), {
//     style: {
//       backgroundColor: 'lightblue',
//     },
//   });

function AgendaDate({ day, label }: { day: Date; label: string }) {
  return (
    <>
      <p>{label}</p>
      <p>{momentHijri(day).format('iDo iMMM')}</p>
    </>
  );
}

function AgendaTime({ event }: { event: any }) {
  const startTime = new Date(event.start);
  const endTime = new Date(event.end);
  return (
    <>
      <p>
        {startTime.toLocaleString('en-US', {
          hour: 'numeric',
          minute: 'numeric',
          hour12: true,
        })}
      </p>
      <p>
        {endTime.toLocaleString('en-US', {
          hour: 'numeric',
          minute: 'numeric',
          hour12: true,
        })}
      </p>
    </>
  );
}

function AgendaEvent({ event }: { event: any }) {
  const [showDescription, setShowDescription] = useState(false);

  return (
    <>
      <span
        onClick={() => {
          setShowDescription(!showDescription);
        }}
        className="indicator-item indicator-start badge badge-secondary bg-slate-900 border-slate-900"
      >
        {/* {showDescription ? '-' : '+'} */}
      </span>
      <p className="ml-4 w-full h-full">
        {showDescription ? event.desc : event.title}
      </p>
    </>
  );
}

/**
 * We are defaulting the localizer here because we are using this same
 * example on the main 'About' page in Storybook
 */
function UpcomingEvents({ localizer = mLocalizer, ...props }) {
  const [components, setComponents] = useState({});

  useEffect(() => {
    setComponents({
      event: AgendaEvent,
      agenda: { date: AgendaDate, time: AgendaTime },
    });
  }, []);

  const formats = useMemo(
    () => ({
      dayFormat: 'ddd',
      weekdayFormat: 'ddd',
      // dateFormat: (date: any, culture: any) =>
      //   hijriLocalizer.format(date, 'iD/D', culture),
      yearFormat: 'iYYYY',
      monthHeaderFormat: 'iMMMM iYYYY / MMMM YYYY',
      // agendaDateFormat: (date: any, culture: any) =>
      //   hijriLocalizer.format(date, 'ddd MMM DD / iMMM iDD', culture),
      //   agendaHeaderFormat: (
      //     { start, end }: { start: any; end: any },
      //     culture: any
      //   ) =>
      //     `${hijriLocalizer.format(
      //       start,
      //       'DD/MM/YYYY / iDD/iMM/iYYYY',
      //       culture
      //     )} – ${hijriLocalizer.format(
      //       end,
      //       'DD/MM/YYYY / iDD/iMM/iYYYY',
      //       culture
      //     )}`,
    }),
    []
  );

  return (
    <div className="flex justify-center content-center text-black m-4">
      <div className="w-full max-w-2xl" style={{ height: '300px' }} {...props}>
        <Calendar
          components={components}
          events={events}
          localizer={localizer}
          showMultiDayTimes
          step={60}
          formats={formats}
          culture="en"
          rtl={false}
          toolbar={false}
          view="agenda"
          views={['agenda', 'day', 'week', 'month']}
        />
      </div>
    </div>
  );
}

export default UpcomingEvents;
