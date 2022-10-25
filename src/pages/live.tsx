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
      <div className="flex min-h-screen flex-col">
        <MyNavBar />
        <DonateBar />
        <MyHero />
        <PrayerBar />
      </div>
      <UpcomingEvents />
      <Announcements />
      <MyFooter />
    </div>
  );
};

export default Index;
