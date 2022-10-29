import Head from "next/head";

import { AnnouncementLinks } from "@/components/AnnouncementLinks";
import { Announcements } from "@/components/Announcements";
import { DonateBar } from "@/components/DonateBar";
import { MyFooter } from "@/components/Footer";
import { MyHero } from "@/components/Hero";
import { MyNavBar } from "@/components/NavBar";
import { PrayerBar } from "@/components/PrayerBar";
import { UpcomingEvents } from "@/components/UpcomingEvents";

const RCC = () => {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico"></link>
        <title>Razavi Community Centre | ISIJ of Toronto</title>
      </Head>
      <MyNavBar />
      <div className="relative mt-16">
        <MyHero
          title="Razavi Community Centre"
          description="Located in the City of Hamilton, this centre is home to a variety of community programs and services."
          primaryButtonText="Our Committees"
          primaryButtonLink="/rcc/committees"
          secondaryButtonText="Visit Our Centre"
          secondaryButtonLink="/rcc"
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

export default RCC;
