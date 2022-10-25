export const DonateBar = () => {
  const categories = [
    { name: "Sadaqa", icon: "$14" },
    { name: "Pakistan", icon: "$72" },
    { name: "Maintenance", icon: "$110" },
  ];
  return (
    <div className="flex flex-col place-items-center justify-center bg-white py-6">
      <div className="mx-4 grid max-w-md grid-cols-3">
        {categories.map((category) => (
          // TODO: adding this padding is kinda hacky, but it works for now
          <div key={category.name} className="grid grid-rows-2 gap-1 pt-2">
            <div className="flex h-12 w-12 place-items-center content-center justify-center place-self-center rounded-full border-2 border-slate-900 text-center text-black">
              <p>{category.icon}</p>
            </div>
            <div className="place-self-center text-center text-black">
              {category.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
