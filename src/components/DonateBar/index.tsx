import Link from "next/link";
import { Button } from "react-daisyui";

export const DonateBar = () => {
  const categories = [
    { name: "Sadaqa", icon: "$14" },
    { name: "Pakistan", icon: "$72" },
    { name: "Maintenance", icon: "$110" },
  ];
  return (
    <div className="mt-4 flex w-full justify-center">
      <div className="flex w-full max-w-2xl px-4">
        <div className="flex w-full flex-col place-items-center justify-center gap-2 rounded-md bg-primary px-4 py-6 text-primary-content">
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
      </div>
    </div>
  );
};
