import Link from "next/link";
import { Button } from "react-daisyui";

import { NavbarItem } from "./NavbarItem";

export const MyNavbar = () => {
  const items = [
    { title: "About", link: "/about" },
    {
      title: "Forms",
      items: [
        {
          title: "Advertising at our Centres",
          link: "/forms/advertising-at-our-centres",
        },
        {
          title: "Membership",
          link: "/forms/membership",
        },
        {
          title: "Surah Fateha",
          link: "/forms/surah-fateha",
        },
        {
          title: "Isale Thawab",
          link: "/forms/isale-thawab",
        },
        {
          title: "Dua Shifa",
          link: "/forms/dua-shifa",
        },
        {
          title: "Engagement",
          link: "/forms/engagement",
        },
      ],
    },
    {
      title: "Announcements",
      items: [
        {
          title: "Engagements",
          link: "/announcements/engagements",
        },
        {
          title: "Dua Shifa",
          link: "/announcements/dua-shifa",
        },
        {
          title: "Obituaries",
          link: "/announcements/obituaries",
        },
      ],
    },
    { title: "Members", link: "https://portal.jaffari.org" },
  ];
  return (
    <div className="navbar fixed top-0 z-10 bg-primary px-4 text-primary-content">
      <div className="navbar-start">
        <Button size="md" shape="square" color="primary" href="/">
          <img
            src="/logo-white.svg"
            alt=""
            className="fill-white stroke-white text-white"
            color="#fff"
          />
        </Button>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          {items.map((item) => (
            <NavbarItem
              key={item.title}
              title={item.title}
              link={item.link}
              items={item.items}
            />
          ))}
        </ul>
      </div>
      <div className="navbar-end">
        <Button color="accent" href="/live" className="invisible lg:visible">
          Watch Live
        </Button>
        <div className="dropdown-end dropdown">
          <label tabIndex={0} className="btn-ghost btn lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-primary p-2 shadow"
          >
            {items.map((item) => (
              <NavbarItem
                key={item.title}
                title={item.title}
                link={item.link}
                items={item.items}
              />
            ))}
            <li>
              <Link href="/live">Watch Live</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
