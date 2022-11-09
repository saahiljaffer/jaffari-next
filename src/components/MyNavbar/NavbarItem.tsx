import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/20/solid";
import { useState } from "react";

export const NavbarItem = ({
  title,
  link,
  items,
}: {
  title: string;
  link?: string;
  items?: { title: string; link: string }[];
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  if (items && items.length > 0) {
    return (
      <>
        <li tabIndex={0} className="hidden lg:block">
          <a>
            {title}
            <svg
              className="fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
            </svg>
          </a>

          <ul className="bg-primary p-2">
            {items.map((item) => (
              <li key={item.title}>
                <a href={item.link}>{item.title}</a>
              </li>
            ))}
          </ul>
        </li>

        <li className="lg:hidden">
          <button
            onClick={() => {
              if (items && items.length > 0) {
                setIsExpanded(!isExpanded);
              }
            }}
          >
            {title}
            {isExpanded ? (
              <ChevronUpIcon width="20" height="20" />
            ) : (
              <ChevronDownIcon width="20" height="20" />
            )}
          </button>
        </li>
        {isExpanded &&
          items.map((item) => (
            <li className="ml-2" key={item.title}>
              <a href={item.link}>{item.title}</a>
            </li>
          ))}
      </>
    );
  }
  return (
    <li>
      <a href={link}>{title}</a>
    </li>
  );
};
