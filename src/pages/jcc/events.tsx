import "react-big-calendar/lib/css/react-big-calendar.css";

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import moment from "moment";
import momentHijri from "moment-hijri";
import { useMemo } from "react";
import type { NavigateAction } from "react-big-calendar";
import { Calendar, momentLocalizer, Navigate } from "react-big-calendar";
import { Button } from "react-daisyui";

const MyMonthDateHeader = ({ label, date }: { label: string; date: Date }) => {
  const momentDate = momentHijri(date);
  const hijriDay = momentDate.format("iDD");
  const hijriMonth = momentDate.locale("ar-SA").format("iMMM")[0];
  const hijriString = `${hijriDay} ${hijriMonth}`;
  return (
    <>
      <span>
        {label} {moment(date).format("MMM")[0]} / {hijriString}
      </span>
    </>
  );
};

const MyToolbar = ({
  date,
  label,
  onNavigate,
}: {
  date: Date;
  label: string;
  onNavigate: (nav: NavigateAction) => void;
}) => {
  const momentDate = momentHijri(date).locale("en");
  const daysInMonth = momentDate.daysInMonth();
  const startMonth = momentDate.date(1).format("iMMMM iYYYY");
  const endMonth = momentDate.date(daysInMonth).format("iMMMM iYYYY");
  const hijriString =
    startMonth === endMonth ? startMonth : `${startMonth} - ${endMonth}`;
  return (
    <div className="mb-2 flex flex-col justify-between sm:flex-row">
      <Button
        onClick={() => {
          onNavigate(Navigate.TODAY);
        }}
        color="primary"
      >
        Today
      </Button>

      <div className="flex flex-1 justify-center">
        <div className="flex w-full max-w-xl">
          <Button
            variant="link"
            onClick={() => {
              onNavigate(Navigate.PREVIOUS);
            }}
          >
            <ChevronLeftIcon className="h-8 w-8 text-black" />
          </Button>
          <div className="flex flex-1 flex-col text-center">
            <p>{label}</p>
            <p>{hijriString}</p>
          </div>
          <Button
            variant="link"
            onClick={() => {
              onNavigate(Navigate.NEXT);
            }}
          >
            <ChevronRightIcon className="h-8 w-8 text-black" />
          </Button>
        </div>
      </div>
    </div>
  );
};

const Events = () => {
  const localizer = momentLocalizer(moment);

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

  const components = useMemo(
    () => ({
      month: {
        dateHeader: MyMonthDateHeader,
      },
      toolbar: MyToolbar,
    }),
    []
  );

  return (
    <div>
      <div className="h-almostScreen p-8">
        <Calendar
          components={components}
          events={events}
          localizer={localizer}
          // max={max}
          // showMultiDayTimes
          // step={60}
          views={["month"]}
        />
      </div>
    </div>
  );
};

export default Events;
