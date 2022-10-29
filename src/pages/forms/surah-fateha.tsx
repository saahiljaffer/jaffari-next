import Head from "next/head";
import { useState } from "react";

const SurahFateha = () => {
  const [names, setNames] = useState([""]);

  return (
    <div>
      <Head>
        <title>Donate Now | ISIJ of Toronto</title>
      </Head>
      <div className="flex flex-col place-content-center place-items-center content-center justify-center gap-2 py-4">
        <h1 className=" text-2xl font-semibold">Surah Fateha</h1>

        <div className="form-control flex w-full max-w-xs flex-col gap-2 py-2">
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

          <label className="label cursor-pointer justify-start gap-2">
            <input
              type="radio"
              name="radio-10"
              className="radio-primary radio"
              checked
            />
            <span className="label-text">One-Time ($5)</span>
          </label>
          <label className="label cursor-pointer justify-start gap-2">
            <input
              type="radio"
              name="radio-10"
              className="radio-primary radio"
              checked
            />
            <span className="label-text">One Year ($250)</span>
          </label>
          {names.map((name, x) => (
            <div key={x}>
              <label className="label">
                <span className="label-text text-black">Name of Marhum(a)</span>
              </label>
              <input
                type="text"
                placeholder="Marhum(a) John Doe"
                value={name}
                className="input-bordered input w-full max-w-xs border-slate-900 bg-white text-black"
              />
            </div>
          ))}
          {names.length < 6 && (
            <button
              onClick={() => {
                setNames((old) => [...old, ""]);
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
              Add a Name
            </button>
          )}

          <button className="btn mt-2 w-full content-center items-center gap-1 bg-slate-900 text-center text-white">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default SurahFateha;
