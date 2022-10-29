import Head from "next/head";

import { AnnouncementLinks } from "@/components/AnnouncementLinks";
import { Announcements } from "@/components/Announcements";
import { DonateBar } from "@/components/DonateBar";
import { MyFooter } from "@/components/Footer";
import { MyHero } from "@/components/Hero";
import { MyNavBar } from "@/components/NavBar";
import { PrayerBar } from "@/components/PrayerBar";
import { UpcomingEvents } from "@/components/UpcomingEvents";

const Index = () => {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico"></link>
        <title>Islamic Shia Ithna-Asheri Jamaat of Toronto</title>
      </Head>
      <MyNavBar />

      <div className="relative mt-16">
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
    </div>
  );
};

export default Index;
