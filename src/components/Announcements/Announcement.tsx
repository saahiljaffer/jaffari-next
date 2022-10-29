import momentHijri from "moment-hijri";
import { useState } from "react";
import { Button } from "react-daisyui";

momentHijri.locale("en");
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
    // eslint-disable-next-line prettier/prettier
    <div className="card card-compact w-full rounded-md bg-primary text-primary-content shadow-xl">
      <div className="card-body flex flex-col content-center justify-center gap-4">
        <div className="flex flex-row items-center justify-between">
          <p className="card-title text-xl">{title}</p>
          <Button
            onClick={() => {
              setIsExpanded(!isExpanded);
            }}
            color="accent"
            shape="square"
            size="sm"
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
          </Button>
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
