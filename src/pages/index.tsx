import { Announcements } from "@/components/Announcements";
import { DonateBar } from "@/components/DonateBar";
import { Footer } from "@/components/Footer";
import { NavBar } from "@/components/NavBar";
import { PrayerBar } from "@/components/PrayerBar";
import { Agenda } from "@/components/UpcomingEvents";

const Index = () => {
  return (
    <div className="bg-white">
      <NavBar />
      <PrayerBar />
      <DonateBar />
      <Agenda />
      <Announcements />
      <Footer />
    </div>
  );
};

export default Index;
