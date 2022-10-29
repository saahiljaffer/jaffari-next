import Head from "next/head";

import { AnnouncementLinks } from "@/components/AnnouncementLinks";
import { CentreCard } from "@/components/CentreCard";
import { MyFooter } from "@/components/Footer";
import { MyHero } from "@/components/Hero";
import { MyNavbar } from "@/components/MyNavbar";

const Index = () => {
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
        <title>Islamic Shia Ithna-Asheri Jamaat of Toronto</title>
      </Head>
      <MyNavbar />
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
  );
};

export default Index;
