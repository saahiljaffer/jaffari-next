export const PrayerBar = () => {
  const prayers = [
    { name: "fajr", time: "6:14AM" },
    { name: "sunrise", time: "7:39AM" },
    { name: "zuhr", time: "1:02PM" },
    { name: "maghrib", time: "6:40PM" },
  ];
  return (
    <div className="flex w-full justify-center">
      <div className="flex w-full max-w-2xl justify-center px-4">
        <div className="flex w-full flex-col place-items-center justify-center gap-2 rounded-md bg-secondary py-6 text-white">
          <p className="font-semibold">24th Rabi Al Awwal 1444</p>
          <div className="mb-2 grid max-w-md grid-cols-4 gap-8">
            {prayers.map((prayer) => (
              <div key={prayer.name} className="grid grid-rows-2">
                <div className="text-center font-semibold"> {prayer.name}</div>
                <div className="text-center"> {prayer.time}</div>
              </div>
            ))}
          </div>
          {/* The button to open modal */}

          <label htmlFor="my-modal-3" className="btn-accent btn flex gap-1">
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
                d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
              />
            </svg>
            <p>Jamaat Salaat at JCC</p>
          </label>

          {/* Put this part before </body> tag */}
          <input type="checkbox" id="my-modal-3" className="modal-toggle" />
          <div className="modal">
            <div className="modal-box relative text-black">
              <label
                htmlFor="my-modal-3"
                className="btn-sm btn-circle btn absolute right-2 top-2 bg-slate-900"
              >
                ✕
              </label>
              <h3 className="pb-2 text-lg font-bold uppercase">
                Jamaat Salaat At JCC
              </h3>
              <p className="py-0.5">FAJR: 6:30 AM</p>
              <p className="py-0.5">
                ZUHR: 1:30 PM on weekdays and 1:15 PM on weekends
              </p>
              <p className="py-0.5">MAGHRIB: Prime Time Everyday</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
