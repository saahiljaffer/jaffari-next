import { usePrefersColorScheme } from "@anatoliygatt/use-prefers-color-scheme";
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
  const preferredColorScheme = usePrefersColorScheme();
  const isDarkColorSchemePreferred = preferredColorScheme === "dark";

  return (
    <div>
      <Head>
        {isDarkColorSchemePreferred ? (
          <>
            <link rel="icon" href="/whiteFavicon/favicon.svg" />
            <link
              rel="mask-icon"
              href="/whiteFavicon/mask-icon.svg"
              color="#ffffff"
            />
            <link
              rel="apple-touch-icon"
              href="/whiteFavicon/apple-touch-icon.png"
            ></link>
            <link rel="icon" href="/whiteFavicon/favicon.ico"></link>
            <link rel="manifest" href="whiteFavicon/manifest.json" />
          </>
        ) : (
          <>
            <link rel="icon" href="/blueFavicon/favicon.svg" />
            <link
              rel="mask-icon"
              href="/blueFavicon/mask-icon.svg"
              color="#ffffff"
            />
            <link
              rel="apple-touch-icon"
              href="/blueFavicon/apple-touch-icon.png"
            ></link>
            <link rel="icon" href="/blueFavicon/favicon.ico"></link>
            <link rel="manifest" href="blueFavicon/manifest.json" />
          </>
        )}
        <link rel="icon" href="/favicon.ico"></link>
        <title>Islamic Shia Ithna-Asheri Jamaat of Toronto</title>
      </Head>
      <MyNavBar />

      <div className="relative mt-16">
        {/* <div className="flex flex-col gap-2 bg-yellow-400 p-4 text-center font-semibold">
          <p>Lunar Eclipse on May 14th, 2022</p>
          <p>Important Announcement for the GTA & Surrounding Areas</p>
        </div> */}
        <MyHero
          title="Jaffari Community Centre"
          description="Situated on the border of Vaughan and Richmond Hill, the Jaffari
                Community Centre is a 100,000 square foot facility that is home
                to a variety of community programs and services."
          primaryButtonText="Our Committees"
          primaryButtonLink="/jcc/committees"
          secondaryButtonText="Visit Our Centre"
          secondaryButtonLink="/jcc/services"
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
