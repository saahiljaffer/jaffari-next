import momentHijri from "moment-hijri";
import { Button } from "react-daisyui";

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
          <p className="font-semibold">
            {momentHijri().locale("en-US").format("iDo iMMMM iYYYY ")}
          </p>
          <div className="mb-2 grid max-w-md grid-cols-4 gap-8">
            {prayers.map((prayer) => (
              <div key={prayer.name} className="grid grid-rows-2">
                <div className="text-center font-semibold"> {prayer.name}</div>
                <div className="text-center"> {prayer.time}</div>
              </div>
            ))}
          </div>
          <div className="flex gap-2">
            <label htmlFor="my-modal-3" className="btn-primary btn flex gap-1">
              <p>Jamaat Salaat</p>
            </label>

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
            <Button color="accent">More Times</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
