import Head from "next/head";

import { AnnouncementLinks } from "@/components/AnnouncementLinks";
import { LiveCard } from "@/components/LiveCard";

const Live = () => {
  const centres = [
    {
      name: "Jaffari Community Centre",
      link: "/jcc",
    },
    {
      name: "Masumeen Islamic Centre",
      link: "/mic",
    },
    {
      name: "Razavi Community Centre",
      link: "/rcc",
    },
    {
      name: "JCC Ladies",
      link: "/zic",
    },
    {
      name: "MIC Ladies",
      link: "/zic",
    },
    {
      name: "Zainabiya Islamic Centre",
      link: "/zic",
    },
  ];

  return (
    <div>
      <Head>
        <title>Watch Live | ISIJ of Toronto</title>
      </Head>

      <div className="flex w-full justify-center">
        <div className="max-w-5xl py-10 sm:grid sm:grid-cols-2 md:grid-cols-3">
          {centres.map((centre) => (
            <LiveCard name={centre.name} link={centre.link} key={centre.name} />
          ))}
        </div>
      </div>
      <AnnouncementLinks size="5xl" />
    </div>
  );
};

export default Live;
