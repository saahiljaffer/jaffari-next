import momentHijri from "moment-hijri";
import { useState } from "react";

momentHijri.locale("en");

/**
 * We are defaulting the localizer here because we are using this same
 * example on the main 'About' page in Storybook
 */
export const Announcement = ({
  title,
  desc,
  image,
}: {
  title: string;
  desc: string[];
  image: string;
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="card card-compact w-full rounded-md bg-slate-900 text-white shadow-xl">
      <div className="card-body flex flex-col content-center justify-center gap-4">
        <div className="flex flex-row items-center justify-between">
          <p className="card-title text-xl">{title}</p>
          <button
            onClick={() => {
              setIsExpanded(!isExpanded);
            }}
            className="btn h-8 min-h-0 w-8  bg-white px-0 text-black hover:bg-zinc-600 hover:text-white"
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

        {isExpanded && (
          <div className="flex flex-col gap-4">
            <img src={image} alt="Announcement" />
            <p>{desc[0]}</p>
          </div>
        )}
      </div>
    </div>
  );
};
