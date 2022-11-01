import Head from "next/head";

import { AnnouncementLinks } from "@/components/AnnouncementLinks";
import { Announcements } from "@/components/Announcements";
import { DonateBar } from "@/components/DonateBar";
import { MyHero } from "@/components/Hero";
import { PrayerBar } from "@/components/PrayerBar";
import { UpcomingEvents } from "@/components/UpcomingEvents";

const MIC = () => {
  return (
    <div>
      <Head>
        <title>Islamic Shia Ithna-Asheri Jamaat of Toronto</title>
      </Head>
      <MyHero
        title="Masumeen Islamic Centre"
        description="Located in the heart of Peel Region, the Masumeen Islamic Centre hosts religious, educational, cultural and social events for the community."
        primaryButtonText="Our Committees"
        primaryButtonLink="/about-us/committees"
        secondaryButtonText="Visit Our Centre"
        secondaryButtonLink="/mic"
      />
      <DonateBar />
      <UpcomingEvents />
      <PrayerBar />
      <Announcements />
      <AnnouncementLinks size="2xl" />
    </div>
  );
};

export default MIC;
