import { Button } from "react-daisyui";

import { Announcements } from "@/components/Announcements";
import { DonateBar } from "@/components/DonateBar";
import { MyFooter } from "@/components/Footer";
import { MyHero } from "@/components/Hero";
import { MyNavBar } from "@/components/NavBar";
import { PrayerBar } from "@/components/PrayerBar";
import { UpcomingEvents } from "@/components/UpcomingEvents";

const Index = () => {
  return (
    <div className="bg-white">
      <MyNavBar />
      <div className="relative mt-16">
        <div className="flex flex-col gap-2 bg-yellow-400 p-4 text-center font-semibold">
          <p>Lunar Eclipse on May 14th, 2022</p>
          <p>Important Announcement for the GTA & Surrounding Areas</p>
        </div>
        <PrayerBar />
        <MyHero />
        <DonateBar />
        <UpcomingEvents />
        <div className="flex w-full justify-center bg-zinc-600 px-4 py-10">
          <div className="flex w-full max-w-2xl flex-col gap-2">
            <div className="card-compact card rounded-md bg-white">
              <div className="card-body flex flex-col items-start gap-0">
                <p className="font-semibold uppercase">
                  Pleace recite Surah Al-Fateha for
                </p>
                <p className="">Marhūm Husein Mohamedtaki Shermohamed</p>

                <span className="mt-2 text-xs uppercase text-zinc-500">
                  Sponsored
                </span>
              </div>
            </div>
            <Button color="accent">Engagements</Button>
            <Button color="accent">Dua Shifa Requests</Button>
            <Button color="accent">Obituaries</Button>
          </div>
        </div>
        <Announcements />
        <MyFooter />
      </div>
    </div>
  );
};

export default Index;
