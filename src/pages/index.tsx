import { usePrefersColorScheme } from "@anatoliygatt/use-prefers-color-scheme";
import Head from "next/head";

import { AnnouncementLinks } from "@/components/AnnouncementLinks";
import { CentreCard } from "@/components/CentreCard";
import { MyFooter } from "@/components/Footer";
import { MyHero } from "@/components/Hero";
import { MyNavBar } from "@/components/NavBar";

const Index = () => {
  const preferredColorScheme = usePrefersColorScheme();
  const isDarkColorSchemePreferred = preferredColorScheme === "dark";

  const centres = [
    {
      name: "Jaffari Community Centre",
      description:
        "Situated on the border of Vaughan and Richmond Hill, the Jaffari Community Centre is a 100,000 square foot facility that is home to a variety of community programs and services.",
      link: "/jcc",
      image: "/assets/images/jcc.jpg",
    },
    {
      name: "Masumeen Islamic Centre",
      description:
        "Located in the heart of Peel Region, the Masumeen Islamic Centre hosts religious, educational, cultural and social events for the community.",
      link: "/mic",
      image: "/assets/images/mic.png",
    },
    {
      name: "Razavi Community Centre",
      description:
        "Located in the City of Hamilton, this centre is home to a variety of community programs and services.",
      link: "/rcc",
      image: "/assets/images/rcc.png",
    },
    {
      name: "Zainabiya Islamic Centre",
      description:
        "Situated in the growing city of Barrie, this centre is home to a variety of community programs and services.",
      link: "/zic",
      image: "/assets/images/jcc.jpg",
    },
  ];

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
        <MyHero
          title="Islamic Shia Ithna-Asheri Jamaat of Toronto"
          description="The ISIJ of Toronto is a charitable organization that serves the muslim community in the Greater Toronto Area through programs and services offered at 4 different centres. "
          primaryButtonLink="/about"
          primaryButtonText="Learn More"
          secondaryButtonLink="/donate"
          secondaryButtonText="Donate"
        />
        <div className="flex w-full justify-center">
          <div className="max-w-5xl py-10 sm:grid sm:grid-cols-2">
            {centres.map((centre) => (
              <CentreCard
                name={centre.name}
                description={centre.description}
                link={centre.link}
                image={centre.image}
                key={centre.name}
              />
            ))}
          </div>
        </div>
        <AnnouncementLinks size="5xl" />
        <MyFooter />
      </div>
    </div>
  );
};

export default Index;
