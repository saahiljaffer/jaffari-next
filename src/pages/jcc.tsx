import Head from "next/head";

import { AnnouncementLinks } from "@/components/AnnouncementLinks";
import { Announcements } from "@/components/Announcements";
import { DonateBar } from "@/components/DonateBar";
import { MyHero } from "@/components/Hero";
import { PrayerBar } from "@/components/PrayerBar";
import { UpcomingEvents } from "@/components/UpcomingEvents";

const JCC = () => {
  return (
    <div>
      <Head>
        <title>Islamic Shia Ithna-Asheri Jamaat of Toronto</title>
      </Head>
      <MyHero
        title="Jaffari Community Centre"
        description="Situated on the border of Vaughan and Richmond Hill, the Jaffari
                Community Centre is a 100,000 square foot facility that is home
                to a variety of community programs and services."
        primaryButtonText="Our Committees"
        primaryButtonLink="/about-us/committees"
        secondaryButtonText="Visit Our Centre"
        secondaryButtonLink="/jcc/services"
      />
      <DonateBar />
      <UpcomingEvents />
      <PrayerBar />
      <Announcements />
      <AnnouncementLinks size="2xl" />
    </div>
  );
};

export default JCC;
