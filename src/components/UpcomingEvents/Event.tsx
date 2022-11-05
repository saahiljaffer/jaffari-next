import { useState } from "react";
import { Button } from "react-daisyui";

// momentHijri.locale("en");

/**
 * We are defaulting the localizer here because we are using this same
 * example on the main 'About' page in Storybook
 */
export const Event = ({
  title,
  description,
}: {
  title: string;
  description: string[];
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="card-compact card w-full rounded-md bg-primary text-primary-content shadow-xl">
      <div className="card-body flex flex-col content-center justify-center">
        <div className="flex flex-row items-center justify-between">
          <p className="text-xl font-semibold">{title}</p>
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
        <p>Thursday, Oct 27th @ 7:15 PM</p>

        <div className="card-actions">
          {isExpanded && (
            <div className="flex flex-col">
              {description.map((item, idx) => (
                <p key={idx}>{item}</p>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
