import { DonateBar } from '@/components/DonateBar';
import { NavBar } from '@/components/NavBar';
import { PrayerTimes } from '@/components/PrayerBar';
import UpcomingEvents from '@/components/UpcomingEvents';

const Index = () => {
  return (
    <div className="bg-white">
      <NavBar />
      <PrayerTimes />
      <DonateBar />
      <UpcomingEvents />
    </div>
  );
};

export default Index;
