import { Button } from "react-daisyui";

import { Announcement } from "./Announcement";

export const Announcements = () => {
  const images = [
    {
      src: "/assets/images/announcements/img1.jpeg",
      title: "Night of the Shahadat of Imam Hasan Al-Askari",
      description: [
        "Join us for the night of the Shahadat of Imam Hasan Al-Askari",
      ],
    },
    {
      src: "/assets/images/announcements/img2.jpeg",
      title: "Eid Az Zahra",
      description: ["Join us for Eid Az Zahra"],
    },
    {
      src: "/assets/images/announcements/img3.jpeg",
      title: "Ladies Morning Program",
      description: ["Join us for Ladies Morning Program"],
    },
    {
      src: "/assets/images/announcements/img4.jpeg",
      title: "Elections for the Zainabiya Islamic Centre",
      description: [
        "Join us for the elections for the Zainabiya Islamic Centre",
      ],
    },
    {
      src: "/assets/images/announcements/img5.jpeg",
      title: "Volunteer Opportunity",
      description: ["Volunteer Opportunity"],
    },
  ];

  return (
    <div className="flex w-full justify-center">
      <div className="flex w-full max-w-2xl flex-col place-items-center gap-8 bg-white py-10 px-4">
        <h2 className="text-center font-semibold">Announcements</h2>
        <div className="flex w-full flex-col content-center justify-center gap-2">
          {images.map((announcement, index) => (
            <Announcement
              title={announcement.title}
              key={index}
              image={announcement.src}
              desc={announcement.description}
            />
          ))}
        </div>
        <Button color="primary" fullWidth>
          Older Announcements
        </Button>
      </div>
    </div>
  );
};
