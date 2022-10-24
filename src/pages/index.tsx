import { Agenda } from '@/components/Agenda/Agenda';
import { Announcements } from '@/components/Announcements';
import { DonateBar } from '@/components/DonateBar';
import { Engagements } from '@/components/Engagements';
import { Footer } from '@/components/Footer';
import { NavBar } from '@/components/NavBar';
import { Obituaries } from '@/components/Obituaries';
import { PrayerBar } from '@/components/PrayerBar';

const Index = () => {
  return (
    <div className="bg-white">
      <NavBar />
      <PrayerBar />
      <DonateBar />
      <Agenda />
      <Announcements />
      <Engagements />
      <Obituaries />
      <Footer />
    </div>
  );
};

export default Index;
