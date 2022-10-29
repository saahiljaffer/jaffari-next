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
        <title>Islamic Shia Ithna-Asheri Jamaat of Toronto</title>
      </Head>
      <MyNavbar />
      <MyHero
        title="Masumeen Islamic Centre"
        description="Located in the heart of Peel Region, the Masumeen Islamic Centre hosts religious, educational, cultural and social events for the community."
        primaryButtonText="Our Committees"
        primaryButtonLink="/mic/committees"
        secondaryButtonText="Visit Our Centre"
        secondaryButtonLink="/mic"
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
