export const PrayerBar = () => {
  const prayers = [
    { name: "fajr", time: "6:14AM" },
    { name: "sunrise", time: "7:39AM" },
    { name: "zuhr", time: "1:02PM" },
    { name: "maghrib", time: "6:40PM" },
  ];
  return (
    <div className="flex flex-col place-items-center justify-center bg-slate-900 py-6 text-white">
      <p className="my-2 font-semibold">24th Rabi Al Awwal 1444</p>
      <div className="mb-2 grid max-w-md grid-cols-4 gap-8">
        {prayers.map((prayer) => (
          <div key={prayer.name} className="grid grid-rows-2">
            <div className="text-center font-semibold"> {prayer.name}</div>
            <div className="text-center"> {prayer.time}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
