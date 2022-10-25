import Link from "next/link";
import { Button, Navbar } from "react-daisyui";

export const MyNavBar = () => (
  <Navbar className="fixed top-0 z-50 bg-primary px-4">
    <Navbar.Start>
      <Link
        href="/"
        className="btn-ghost btn p-0 text-xl normal-case hover:cursor-pointer"
      >
        <img
          alt=""
          className="h-12 hover:cursor-pointer"
          src="/assets/images/ISIJ-Logo-White.png"
        />
      </Link>
    </Navbar.Start>
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
          <ul className="bg-white p-2">
            <li>
              <a>Advertising at our Centre</a>
            </li>
            <li>
              <a>Membership</a>
            </li>
            <li>
              <a>Sura al-Fatiha Request</a>
            </li>
            <li>
              <a>Isale Thawab Request</a>
            </li>
            <li>
              <a>Dua Shifa-e-Mareez</a>
            </li>
            <li>
              <a>Engagement</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <div className="navbar-end">
      <li className="hidden lg:flex">
        <Button>Watch Live</Button>
      </li>

      <div className="dropdown-end dropdown">
        <label tabIndex={0} className="lg:hidden">
          <Button color="primary" size="sm" shape="square">
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
          </Button>
        </label>

        <ul
          tabIndex={0}
          className="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-white p-2 shadow"
        >
          <li>
            <a>About</a>
          </li>
          <li tabIndex={0}>
            <a className="justify-between">
              Forms
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
                <a>Advertising at our Centre</a>
              </li>
              <li>
                <a>Membership</a>
              </li>
              <li>
                <a>Sura al-Fatiha Request</a>
              </li>
              <li>
                <a>Isale Thawab Request</a>
              </li>
              <li>
                <a>Dua Shifa-e-Mareez</a>
              </li>
              <li>
                <a>Engagement</a>
              </li>
            </ul>
          </li>
          <li>
            <Button color="primary">Watch Live</Button>
          </li>
        </ul>
      </div>
    </div>
  </Navbar>
);
