import { Bars3Icon } from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";
import { Button } from "react-daisyui";

import { NavbarItem } from "./NavbarItem";

export const MyNavbar = () => {
  const items = [
    {
      title: "About Us",
      items: [
        { title: "About Us", link: "/about-us" },
        { title: "Resident Alims", link: "/about-us/resident-alims" },

        { title: "Board of Directors", link: "/about-us/board-of-directors" },
        { title: "Committees", link: "/about-us/committees" },
        { title: "Careers", link: "/about-us/careers" },
      ],
    },
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
    { title: "Contact Us", link: "/contact-us" },
    { title: "Watch Live", link: "/live" },
  ];
  return (
    <div className="fixed top-0 z-10 flex w-full justify-center bg-primary">
      <div className="navbar z-20 max-w-7xl px-4 text-primary-content">
        <div className="navbar-start">
          <Button size="md" shape="square" color="primary" href="/">
            <Image
              src="/logo-white.svg"
              alt="Home"
              className="fill-white stroke-white text-white"
              color="#fff"
              width={50}
              height={50}
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
          <Button
            color="accent"
            href="https://portal.jaffari.org"
            className="invisible lg:visible"
          >
            Members Portal
          </Button>
          <div className="dropdown-end dropdown">
            <label tabIndex={0} className="btn-ghost btn lg:hidden">
              <Bars3Icon className="h-6 w-6" />
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
                <Link href="https://portal.jaffari.org">Members Portal</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
