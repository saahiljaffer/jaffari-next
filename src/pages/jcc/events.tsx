import "react-big-calendar/lib/css/react-big-calendar.css";

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import type { LocaleSpecifier } from "moment";
import moment from "moment";
import momentHijri from "moment-hijri";
import type { ReactNode } from "react";
import { useEffect, useMemo, useState } from "react";
import type { DateLocalizer, ToolbarProps, View } from "react-big-calendar";
import { Calendar, momentLocalizer, Navigate } from "react-big-calendar";
import { Button, Card, Select } from "react-daisyui";
import * as ReactDOM from "react-dom";
import { usePopper } from "react-popper";
import { useMedia } from "react-use";

import { events } from "@/util/importantEvents";

const defaultTheme = require("tailwindcss/defaultTheme");

const { Option } = Select;

const MyToolbar = ({
  view,
  views,
  label,
  onNavigate,
  onView,
}: ToolbarProps) => {
  const newViews = Array.isArray(views) ? views : Object.keys(views);

  return (
    <div className="mb-2 flex flex-col justify-between md:flex-row">
      <div className="flex justify-center gap-4">
        <Button
          onClick={() => {
            onNavigate(Navigate.TODAY);
          }}
          color="primary"
        >
          Today
        </Button>
        <Select
          onChange={(value) => {
            onView(value as View);
          }}
        >
          {newViews.map((value) => (
            <Option
              value={`${value}`}
              color={value === view ? "secondary" : "primary"}
              key={value}
            >
              {value.toUpperCase()}
            </Option>
          ))}
        </Select>
      </div>

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
      </div>
    </div>
  );
};

const Events = () => {
  const [globalLocalizer, setGlobalLocalizer] = useState<DateLocalizer>();
  const [eventDisplay, setEventDisplay] = useState<Date>();

  const MyDateCellWrapper = ({
    value,
    children,
  }: {
    value?: Date;
    children?: ReactNode;
  }) => {
    return (
      <div
        onClick={() => {
          setEventDisplay(value);
        }}
        className="flex h-full w-full place-items-end content-center justify-center"
      >
        {children}
      </div>
    );
  };

  const MyEvent = ({
    event,
    title,
  }: {
    event: { desc: string[]; category: string; start: Date };
    title: string;
  }) => {
    const [referenceElement, setReferenceElement] =
      useState<HTMLElement | null>(null);
    const [popperElement, setPopperElement] = useState<HTMLElement | null>(
      null
    );
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
            setEventDisplay(event.start);
          }}
          className="flex w-full justify-center md:hidden"
        >
          <div className="mt-1.5 h-12 w-full bg-primary" />
        </button>

        <div className="px-px">
          <Button
            size="sm"
            fullWidth={true}
            onClick={() => {
              setViewPopup(true);
            }}
            ref={setReferenceElement}
            className={`z-10 hidden justify-start overflow-hidden text-ellipsis rounded-md py-0.5 px-[5px] text-left md:block ${
              event.category === "islamic"
                ? "btn-primary"
                : "btn-secondary text-white"
            }`}
          >
            <span className="overflow-hidden text-ellipsis text-left">
              {title}
            </span>
          </Button>
        </div>

        {viewPopup &&
          ReactDOM.createPortal(
            <Card
              ref={setPopperElement}
              style={styles.popper}
              {...attributes.popper}
              className={`card-compact z-20 m-1 w-64 border-none p-2 text-primary-content shadow ${
                event.category === "islamic" ? "bg-primary" : "bg-secondary"
              }`}
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

  const MyMonthDateHeader = ({
    date,
    label,
  }: {
    date: Date;
    label: string;
  }) => {
    return (
      <>
        <div className="text-center">
          <p className="hidden md:block">
            {moment(date).locale("en-US").format("Do MMM")}
          </p>
          <p className="hidden md:block">
            {momentHijri(date).locale("en-US").format("iDo iMMM")}
          </p>
        </div>
        <button
          className="flex w-full flex-col content-center justify-center p-0 text-center md:hidden"
          onClick={() => {
            setEventDisplay(date);
          }}
        >
          <p className="w-full text-center">{label}</p>
          <p className="w-full text-center">
            {momentHijri(date).locale("en-US").format("iDD")}
          </p>
        </button>
      </>
    );
  };

  const components = useMemo(
    () => ({
      month: {
        dateHeader: MyMonthDateHeader,
        event: MyEvent,
      },
      toolbar: MyToolbar,
      // eventWrapper: MyEventWrapper,
      // eventContainerWrapper: MyEventContainerWrapper,
      dateCellWrapper: MyDateCellWrapper,
    }),
    []
  );

  const isDesktop = useMedia(`(min-width: ${defaultTheme.screens.md})`, false);

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
        const startDate = isDesktop
          ? hijriDate.date(1).format("iMMMM iYYYY")
          : hijriDate.date(1).format("iMMM iYYYY");
        const endDate = isDesktop
          ? hijriDate.date(daysInMonth).format("iMMMM iYYYY")
          : hijriDate.date(daysInMonth).format("iMMM iYYYY");

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
    [isDesktop]
  );

  useEffect(() => {
    setGlobalLocalizer(momentLocalizer(moment));
  }, []);

  return (
    <div className="p-8">
      {globalLocalizer && (
        <>
          <div className="h-[600px]">
            <Calendar
              components={components}
              events={events}
              localizer={globalLocalizer}
              formats={formats}
              culture="en-US"
              selectable={true}
              popup={true}
              tooltipAccessor={() => ""}
              onSelectSlot={(slotInfo) => {
                setEventDisplay(slotInfo?.slots[0]);
              }}
            />
          </div>

          <div className="my-8 h-[400px] md:hidden">
            <Calendar
              events={events}
              localizer={globalLocalizer}
              culture="en-US"
              view="agenda"
              toolbar={false}
              date={eventDisplay}
              length={0}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Events;
