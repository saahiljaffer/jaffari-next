import Link from "next/link";
import { Button } from "react-daisyui";

export const DonateBar = () => {
  const categories = [
    { name: "Sadaqa", icon: "$14" },
    { name: "Pakistan", icon: "$72" },
    { name: "Maintenance", icon: "$110" },
  ];
  return (
    <div className="flex flex-col place-items-center justify-center gap-2 bg-primary py-6 px-4 text-primary-content">
      <div className="mx-4 grid max-w-md grid-cols-3">
        {categories.map((category) => (
          // TODO: adding this padding is kinda hacky, but it works for now
          <div key={category.name} className="grid grid-rows-2 gap-1 pt-2">
            <div className="flex h-12 w-12 place-items-center content-center justify-center place-self-center rounded-full border-2 border-white text-center ">
              <p>{category.icon}</p>
            </div>
            <div className="place-self-center text-center ">
              {category.name}
            </div>
          </div>
        ))}
      </div>
      <Link href="/donate">
        <Button color="accent" fullWidth>
          Donate Now
        </Button>
      </Link>
    </div>
  );
};
