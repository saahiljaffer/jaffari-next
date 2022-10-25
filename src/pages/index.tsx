import { Announcements } from "@/components/Announcements";
import { DonateBar } from "@/components/DonateBar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { NavBar } from "@/components/NavBar";
import { PrayerBar } from "@/components/PrayerBar";
import { Agenda } from "@/components/UpcomingEvents";

const Index = () => {
  return (
    <div className="bg-white">
      <NavBar />
      <div className="relative mt-16">
        <DonateBar />
        <Hero />
        <PrayerBar />
        <Agenda />
        <div className="flex w-full justify-center bg-slate-900 px-4 py-8">
          <div className="flex w-full max-w-2xl flex-col gap-2">
            <div className="card-compact card rounded-md bg-white text-black">
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
            <button className="btn bg-white text-black hover:bg-zinc-600">
              Engagements
            </button>
            <button className="btn bg-white text-black hover:bg-zinc-600">
              Dua Shifa Requests
            </button>
            <button className="btn bg-white text-black hover:bg-zinc-600">
              Obituaries
            </button>
          </div>
        </div>
        <Announcements />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
