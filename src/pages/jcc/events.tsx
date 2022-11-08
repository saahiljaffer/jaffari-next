import "react-big-calendar/lib/css/react-big-calendar.css";

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import type { LocaleSpecifier } from "moment";
import moment from "moment";
import momentHijri from "moment-hijri";
import { useEffect, useMemo, useState } from "react";
import type { DateLocalizer, ToolbarProps, View } from "react-big-calendar";
import { Calendar, momentLocalizer, Navigate } from "react-big-calendar";
import { Button, Card, Select } from "react-daisyui";
import * as ReactDOM from "react-dom";
import { usePopper } from "react-popper";

const { Option } = Select;

const MyMonthDateHeader = ({ date }: { date: Date }) => {
  return (
    <div className="text-center">
      <p>{moment(date).locale("en-US").format("Do MMM")}</p>
      <p>{momentHijri(date).locale("en-US").format("iDo iMMM")}</p>
    </div>
  );
};

const MyToolbar = ({
  view,
  views,
  label,
  onNavigate,
  onView,
}: ToolbarProps) => {
  const newViews = Array.isArray(views) ? views : Object.keys(views);

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
            {label.split("\n").map((labelStr) => (
              <p key={labelStr}>{labelStr}</p>
            ))}
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
        <Select>
          {newViews.map((value) => (
            <Option
              value={`${value}2`}
              color={value === view ? "secondary" : "primary"}
              key={value}
              onClick={() => {
                onView(value as View);
              }}
            >
              {value.toUpperCase()}
            </Option>
          ))}
        </Select>
      </div>
    </div>
  );
};

const MyEvent = ({
  event,
  title,
}: {
  event: { desc: string[] };
  title: string;
}) => {
  const [referenceElement, setReferenceElement] = useState<HTMLElement | null>(
    null
  );
  const [popperElement, setPopperElement] = useState<HTMLElement | null>(null);
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: "bottom-start",
  });
  const [viewPopup, setViewPopup] = useState(false);

  useEffect(() => {
    const handleClickOutside = (e: any) => {
      if (popperElement && !popperElement.contains(e.target)) {
        setViewPopup(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [popperElement]);

  return (
    <>
      <button
        onClick={() => {
          setViewPopup(true);
        }}
        type="button"
        ref={setReferenceElement}
        className="z-10 w-full text-left"
      >
        {title}
      </button>

      {viewPopup &&
        ReactDOM.createPortal(
          <Card
            ref={setPopperElement}
            style={styles.popper}
            {...attributes.popper}
            className="card-compact z-20 m-1 w-64 border-none bg-primary p-2 text-primary-content shadow"
          >
            <Card.Body>
              <Card.Title tag={"h3"}>{title}</Card.Title>
              {event.desc.map((str) => (
                <p key={str}>{str}</p>
              ))}
            </Card.Body>
          </Card>,
          document.body
        )}
    </>
  );
};

const Events = () => {
  const [globalLocalizer, setGlobalLocalizer] = useState<DateLocalizer>();

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
    },
    {
      id: 3,
      title: "Wiladat of Imam Hassan Askari",
      start: new Date(2022, 10, 18, 19, 15, 0, 0),
      end: new Date(2022, 10, 18, 22, 30, 0, 0),
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
        event: MyEvent,
      },
      toolbar: MyToolbar,
    }),
    []
  );

  const formats = useMemo(
    () => ({
      monthHeaderFormat: (
        date: Date,
        culture: string | undefined,
        localizer: DateLocalizer | undefined
      ) => {
        const hijriDate = momentHijri(date).locale(culture as LocaleSpecifier);
        const gregorianDate = localizer?.format(date, `MMMM YYYY`, culture);
        const daysInMonth = moment(date).daysInMonth();
        const startDate = hijriDate.date(1).format("iMMMM iYYYY");
        const endDate = hijriDate.date(daysInMonth).format("iMMMM iYYYY");

        const hijriString =
          startDate === endDate ? startDate : `${startDate} - ${endDate}`;

        return `${gregorianDate}\n${hijriString}`;
      },
      dayRangeHeaderFormat: (
        range: { start: Date; end: Date },
        culture: string | undefined
      ) => {
        const gregorianStartDate = moment(range.start);
        const gregorianEndDate = moment(range.end);
        const gregorianStartDateString = gregorianStartDate.format("MMMM DD");
        const gregorianEndDateString =
          gregorianStartDate.month() === gregorianEndDate.month()
            ? gregorianEndDate.format("DD")
            : gregorianEndDate.format("MMMM DD");

        const hijriStartDate = momentHijri(range.start).locale(
          culture as LocaleSpecifier
        );
        const hijriEndDate = momentHijri(range.end).locale(
          culture as LocaleSpecifier
        );
        const hijriStartDateString = hijriStartDate.format("iMMMM iDD");
        const hijriEndDateString =
          hijriStartDate.iMonth() === hijriEndDate.iMonth()
            ? hijriEndDate.format("iDD")
            : hijriEndDate.format("iMMMM iDD");

        return `${gregorianStartDateString} - ${gregorianEndDateString}\n${hijriStartDateString} - ${hijriEndDateString}`;
      },
      dayHeaderFormat: (
        date: Date,
        culture: string | undefined,
        localizer: DateLocalizer | undefined
      ) => {
        const gregorianString = localizer?.format(
          date,
          "dddd, Do MMMM",
          culture
        );
        const hijriString = momentHijri(date)
          .locale(culture as LocaleSpecifier)
          .format("iDo iMMMM");
        return `${gregorianString}\n${hijriString}`;
      },
      agendaHeaderFormat: (
        range: { start: Date; end: Date },
        culture: string | undefined,
        localizer: DateLocalizer | undefined
      ) => {
        const gregorianStartString = localizer?.format(
          range.start,
          "MMM Do",
          culture
        );
        const gregorianEndString = localizer?.format(
          range.end,
          "MMM Do",
          culture
        );
        const hijriStartString = momentHijri(range.start)
          .locale(culture as LocaleSpecifier)
          .format("iDo iMMMM");
        const hijriEndString = momentHijri(range.end)
          .locale(culture as LocaleSpecifier)
          .format("iDo iMMMM");
        return `${gregorianStartString} - ${gregorianEndString}\n${hijriStartString} - ${hijriEndString}`;
      },
      agendaDateFormat: (
        date: Date,
        culture: string | undefined,
        localizer: DateLocalizer | undefined
      ) => {
        const gregorianString = localizer?.format(date, "ddd Do MMM", culture);

        const hijriString = momentHijri(date)
          .locale(culture as LocaleSpecifier)
          .format("iDo iMMM");

        return `${gregorianString}/${hijriString}`;
      },
      dayFormat: (
        date: Date,
        culture: string | undefined,
        localizer: DateLocalizer | undefined
      ) => {
        const gregorianString = localizer?.format(date, "ddd DD", culture);

        const hijriString = momentHijri(date)
          .locale(culture as LocaleSpecifier)
          .format("iDD");

        return `${gregorianString}(${hijriString})`;
      },
    }),
    []
  );

  useEffect(() => {
    setGlobalLocalizer(momentLocalizer(moment));
  }, []);

  return (
    <div>
      <div className="h-almostScreen p-8">
        {globalLocalizer && (
          <Calendar
            components={components}
            events={events}
            localizer={globalLocalizer}
            formats={formats}
            culture="en-US"
            onSelectEvent={(event: Object) => {
              return <pre>{JSON.stringify(event)}</pre>;
            }}
            popup={true}
          />
        )}
      </div>
    </div>
  );
};

export default Events;
