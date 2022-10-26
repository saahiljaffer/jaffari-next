import { Button } from "react-daisyui";

export const MyNavBar = () => (
  <div className="navbar fixed top-0 z-10 bg-primary px-4 text-primary-content">
    <div className="navbar-start">
      <Button size="md" shape="square" color="primary" href="/">
        <img
          className="btn-primary h-full w-full"
          alt=""
          src="/assets/images/ISIJ-Logo-White.png"
        />
      </Button>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal p-0">
        <li>
          <a>About</a>
        </li>
        <li tabIndex={0}>
          <a>
            Forms
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
            <li>
              <a>Advertising at our Centre</a>
            </li>
            <li>
              <a>Membership</a>
            </li>
            <li>
              <a>Sura al-Fatiha</a>
            </li>
            <li>
              <a>Isale Thawab</a>
            </li>
            <li>
              <a>Dua Shifa-e-Mareez</a>
            </li>
            <li>
              <a>Engagement</a>
            </li>
          </ul>
        </li>
        <li tabIndex={0}>
          <a>
            Announcements
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
            <li>
              <a>Engagements</a>
            </li>
            <li>
              <a>Dua Shifa Requests</a>
            </li>
            <li>
              <a>Obituaries</a>
            </li>
          </ul>
        </li>
        <li>
          <a>Members</a>
        </li>
      </ul>
    </div>
    <div className="navbar-end">
      <a className="btn-accent btn invisible lg:visible">Get started</a>
      <div className="dropdown">
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
          className="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100 p-2 shadow"
        >
          <li>
            <a>Item 1</a>
          </li>
          <li tabIndex={0}>
            <a className="justify-between">
              Parent
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
              </svg>
            </a>
            <ul className="p-2">
              <li>
                <a>Submenu 1</a>
              </li>
              <li>
                <a>Submenu 2</a>
              </li>
            </ul>
          </li>
          <li>
            <a>Item 3</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
);
