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
        <Announcements />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
