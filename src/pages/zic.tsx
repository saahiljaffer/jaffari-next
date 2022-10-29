import Head from "next/head";

import { AnnouncementLinks } from "@/components/AnnouncementLinks";
import { Announcements } from "@/components/Announcements";
import { DonateBar } from "@/components/DonateBar";
import { MyFooter } from "@/components/Footer";
import { MyHero } from "@/components/Hero";
import { MyNavbar } from "@/components/MyNavbar";
import { PrayerBar } from "@/components/PrayerBar";
import { UpcomingEvents } from "@/components/UpcomingEvents";

const Index = () => {
  return (
    <div>
      <Head>
        <title>Zainabiya Islamic Centre</title>
      </Head>
      <MyNavbar />
      <MyHero
        title="Zainabiya Islamic Centre"
        description="Situated in the growing city of Barrie, this centre is home to a variety of community programs and services."
        primaryButtonText="Our Committees"
        primaryButtonLink="/zic/committees"
        secondaryButtonText="Visit Our Centre"
        secondaryButtonLink="/zic"
      />
      <DonateBar />
      <UpcomingEvents />
      <PrayerBar />
      <Announcements />
      <AnnouncementLinks size="2xl" />
      <MyFooter />
    </div>
  );
};

export default Index;
