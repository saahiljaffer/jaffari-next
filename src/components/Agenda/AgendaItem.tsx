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
      <div className="text-sm indicator flex-col w-full py-1 px-2 border-[#2a303c] border-l border-b">
        <span
          onClick={() => {
            setIsExpanded(!isExpanded);
          }}
          className="indicator-item indicator-start bg-slate-900 border-slate-900 badge badge-secondary"
        ></span>
        <p>
          {start.toLocaleString('en-GB', {
            day: '2-digit',
            month: 'short',
          })}
        </p>
        <p>{momentHijri(start).format('iDD iMMM')}</p>
      </div>
      <div className="text-sm flex flex-col py-1 px-2 border-[#2a303c] border-l border-b">
        <p>
          7:15 PM
          {/* {start.toLocaleString("en-GB", {
                    hour: "numeric",
                    minute: "numeric",
                    hour12: true,
                  })} */}
        </p>
        <p>
          10:30 PM
          {/* {end.toLocaleString("en-GB", {
                    hour: "numeric",
                    minute: "numeric",
                    hour12: true,
                  })} */}
        </p>
      </div>
      <div className="col-span-2 flex flex-col justify-center py-1 px-2 border-[#2a303c] border-x border-b">
        <p className="text-left text-sm">{title}</p>
      </div>
      {isExpanded && (
        <div className="col-span-4 text-left text-sm p-2 border-[#2a303c] border-x border-b">
          {desc.map((str: string) => (
            <p key={str}>{str}</p>
          ))}
          {live && <a href="/live">This event will be live streamed</a>}
        </div>
      )}
    </>
  );
}

export default AgendaItem;
