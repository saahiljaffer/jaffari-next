import { Agenda } from '@/components/Agenda/Agenda';
import { Announcements } from '@/components/Announcements';
import { DonateBar } from '@/components/DonateBar';
import { NavBar } from '@/components/NavBar';
import { PrayerTimes } from '@/components/PrayerBar';

const Index = () => {
  return (
    <div className="bg-white">
      <NavBar />
      <PrayerTimes />
      <DonateBar />
      <Agenda />
      <Announcements />
    </div>
  );
};

export default Index;
