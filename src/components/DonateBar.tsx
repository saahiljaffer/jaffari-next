import Link from "next/link";

export const DonateBar = () => {
  const categories = [
    { name: "Sadaqa", icon: "$14" },
    { name: "Pakistan", icon: "$72" },
    { name: "Maintenance", icon: "$110" },
  ];
  return (
    <div className="flex flex-col place-items-center justify-center gap-2 bg-slate-900 py-6 px-4 text-white">
      <div className="mx-4 grid max-w-md grid-cols-3">
        {categories.map((category) => (
          // TODO: adding this padding is kinda hacky, but it works for now
          <div key={category.name} className="grid grid-rows-2 gap-1 pt-2">
            <div className="flex h-12 w-12 place-items-center content-center justify-center place-self-center rounded-full border-2 border-white text-center text-white">
              <p>{category.icon}</p>
            </div>
            <div className="place-self-center text-center text-white">
              {category.name}
            </div>
          </div>
        ))}
      </div>
      <Link href="/donate">
        <div className="btn w-full bg-white text-slate-900 hover:bg-zinc-600 hover:text-white">
          Donate Now
        </div>
      </Link>
    </div>
  );
};
