import { Announcements } from "@/components/Announcements";
import { DonateBar } from "@/components/DonateBar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { NavBar } from "@/components/NavBar";
import { PrayerBar } from "@/components/PrayerBar";
import { UpcomingEvents } from "@/components/UpcomingEvents";

const Index = () => {
  return (
    <div className="bg-white">
      <div className="flex min-h-screen flex-col">
        <NavBar />
        <DonateBar />
        <Hero />
        <PrayerBar />
      </div>
      <UpcomingEvents />
      <Announcements />
      <Footer />
    </div>
  );
};

export default Index;
