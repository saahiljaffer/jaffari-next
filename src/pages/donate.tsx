import { useState } from "react";

import { MyNavBar } from "@/components/NavBar";

const Donate = () => {
  const funds = [
    "General",
    "Flood Relief",
    "Hurricane Fiona Relief",
    "Muharram Fund",
    "Alam & Taboot",
    "Imam-e-Zamana Campaign",
    "Iraqi Orphans",
    "Widows & Orphans",
    "MIC - Capital Projects",
    "Fidya/Kaffara",
    "Sadqa",
    "Khums",
  ];
  const [index, setIndex] = useState(0);
  const [donations, setDonations] = useState(["$$"]);
  const tabs = ["One-Time", "Monthly"];
  return (
    <div className="bg-white text-black">
      <MyNavBar />
      <div className="mt-16 flex flex-col place-content-center place-items-center content-center justify-center gap-2 py-4">
        <h1 className=" text-2xl font-semibold">Donate</h1>
        <div className="tabs">
          {tabs.map((tab, i) => (
            <button
              onClick={() => {
                setIndex(i);
              }}
              key={i}
              className={`${
                index === i
                  ? "tab-active font-semibold text-black"
                  : "text-zinc-500"
              } tab tab-bordered`}
            >
              {tab}
            </button>
          ))}
        </div>
        {donations.map((donation, x) => (
          <div
            key={index}
            className="form-control flex w-full max-w-xs flex-col gap-2 py-2"
          >
            <div>
              <label className="label">
                <span className="label-text text-black">Select a Fund</span>
                {donations.length > 1 && (
                  <button
                    onClick={() => {
                      setDonations([
                        ...donations.slice(0, x),
                        ...donations.slice(x + 1),
                      ]);
                    }}
                  >
                    <span className="label-text-alt">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="h-5 w-5 text-black"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </span>
                  </button>
                )}
              </label>
              <select className="select-bordered select w-full border-slate-900 bg-white">
                <option disabled selected>
                  Pick one
                </option>
                {funds.map((fund, i) => (
                  <option key={i}>{fund}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="label">
                <span className="label-text text-black">Amount</span>
                <span className="label-text-alt text-black">CAD</span>
              </label>
              <input
                type="text"
                placeholder={donation}
                className="input-bordered input w-full max-w-xs border-slate-900 bg-white text-black"
              />
            </div>
          </div>
        ))}
        <button
          onClick={() => {
            setDonations((old) => [...old, "$$"]);
          }}
          className="mt-2 flex max-w-xs content-center items-center gap-1 bg-white text-left uppercase text-black"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          Add a Donation
        </button>
        <div
          key={index}
          className="form-control flex w-full max-w-xs flex-col gap-2 py-2"
        >
          <div>
            <label className="label">
              <span className="label-text text-black">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="input-bordered input w-full max-w-xs border-slate-900 bg-white text-black"
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text text-black">Email Address</span>
            </label>
            <input
              type="text"
              placeholder="admin@jaffari.org"
              className="input-bordered input w-full max-w-xs border-slate-900 bg-white text-black"
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text text-black">Phone Number</span>
            </label>
            <input
              type="text"
              placeholder="905-695-9786"
              className="input-bordered input w-full max-w-xs border-slate-900 bg-white text-black"
            />
          </div>

          <button className="btn mt-2 w-full content-center items-center gap-1 bg-slate-900 text-center text-white">
            Donate Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Donate;
