import momentHijri from 'moment-hijri';
import { useState } from 'react';

momentHijri.locale('en');

/**
 * We are defaulting the localizer here because we are using this same
 * example on the main 'About' page in Storybook
 */
function AgendaItem({
  start,
  title,
  desc,
  live,
}: {
  start: Date;
  title: string;
  desc: string[];
  live: boolean;
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <div className="indicator flex-col w-full p-1 pr-2 border-[#2a303c] border-l border-b">
        <span
          onClick={() => {
            setIsExpanded(!isExpanded);
          }}
          className="indicator-item indicator-start bg-slate-900 border-slate-900 badge badge-secondary"
        ></span>
        <p className="text-left ml-1">
          {start.toLocaleString('en-GB', {
            day: '2-digit',
            month: 'short',
          })}
        </p>
      </div>
      <div className="text-left flex flex-col p-1 pr-2 border-[#2a303c] border-l border-b">
        <p>
          7:15 PM
          {/* {start.toLocaleString("en-GB", {
                    hour: "numeric",
                    minute: "numeric",
                    hour12: true,
                  })} */}
        </p>
      </div>
      <div className="flex flex-col justify-center p-1 border-[#2a303c] border-x border-b">
        <p className="text-left">{title}</p>
      </div>
      {isExpanded && (
        <div className="text-left col-span-3 p-1 pl-2 border-[#2a303c] border-x border-b">
          {desc.map((str: string) => (
            <p className="mb-1" key={str}>
              {str}
            </p>
          ))}
          <p className="mb-1">
            <span className="font-semibold">Islamic Date: </span>
            {momentHijri(start).format('iDD iMMM')}
          </p>
          <p className="mb-1">
            <span className="font-semibold">Estimated End Time: </span>
            10:30 PM
          </p>
          {live && (
            <p className="mb-1">
              <span className="font-semibold">Live Stream: </span>
              <a href="/live">Click Here</a>
            </p>
          )}
          <p className="mb-1">
            <span className="font-semibold">Category: </span>
            Jamaat Program
          </p>
        </div>
      )}
    </>
  );
}

export default AgendaItem;
