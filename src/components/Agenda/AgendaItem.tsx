import momentHijri from 'moment-hijri';
import { useState } from 'react';

momentHijri.locale('en');

/**
 * We are defaulting the localizer here because we are using this same
 * example on the main 'About' page in Storybook
 */
export const AgendaItem = ({
  title,
  desc,
}: {
  title: string;
  desc: string[];
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="card w-full bg-base-100 shadow-xl text-white">
      <div className="card-body p-5">
        <div className="flex flex-row justify-between">
          <h2 className="card-title">{title}</h2>
          <button
            onClick={() => {
              setIsExpanded(!isExpanded);
            }}
            className="btn bg-white text-black"
          >
            {isExpanded ? 'Hide' : 'Show'}
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
