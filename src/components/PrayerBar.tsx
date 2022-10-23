export const PrayerTimes = () => {
  const prayers = [
    { name: 'fajr', time: '6:14AM' },
    { name: 'sunrise', time: '7:39AM' },
    { name: 'zuhr', time: '1:02PM' },
    { name: 'maghrib', time: '6:40PM' },
  ];
  return (
    <div className="flex justify-center bg-slate-900 py-2 text-white">
      <div className="grid max-w-md grid-cols-4 gap-8">
        {prayers.map((prayer) => (
          <div key={prayer.name} className="grid grid-rows-2">
            <div className="text-center"> {prayer.name}</div>
            <div className="text-center"> {prayer.time}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
