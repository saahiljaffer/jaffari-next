import momentHijri from "moment-hijri";
import { useState } from "react";

momentHijri.locale("en");

/**
 * We are defaulting the localizer here because we are using this same
 * example on the main 'About' page in Storybook
 */
export const Event = ({ title, desc }: { title: string; desc: string[] }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="card w-full rounded-lg bg-slate-900 text-white shadow-xl">
      <div className="card-body flex flex-col content-center justify-center p-5">
        <div className="flex flex-row justify-between">
          <p className="text-xl font-semibold">{title}</p>
          <button
            onClick={() => {
              setIsExpanded(!isExpanded);
            }}
            className="btn h-8 min-h-0 w-8  bg-white px-0 text-black hover:bg-zinc-500 hover:text-white"
          >
            {isExpanded ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 4.5h14.25M3 9h9.75M3 13.5h5.25m5.25-.75L17.25 9m0 0L21 12.75M17.25 9v12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0l-3.75-3.75M17.25 21L21 17.25"
                />
              </svg>
            )}
          </button>
        </div>
        <p>Thursday, Oct 27th @ 7:15 PM</p>

        <div className="card-actions justify-end">
          {isExpanded && <p>{desc[0]}</p>}
        </div>
      </div>
    </div>
  );
};
