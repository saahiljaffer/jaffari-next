const DonateBar = () => {
  const categories = [
    { name: 'Sadaqa', icon: '6:14am' },
    { name: 'Pakistan', icon: '7:39am' },
    { name: 'Maintenance', icon: '1:02pm' },
    { name: 'Donations', icon: '6:40pm' },
  ];
  return (
    <div className="flex justify-center bg-[#2a303c] py-2">
      <div className="grid max-w-md grid-cols-4">
        {categories.map((category) => (
          // TODO: adding this padding is kinda hacky, but it works for now
          <div key={category.name} className="grid grid-rows-2 gap-1 pt-2">
            <div className="h-8 w-8 place-self-center rounded-full border-2"></div>
            <div className="place-self-center text-center text-white">
              {category.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export { DonateBar };
