import { Swiper, SwiperSlide } from "swiper/react";

export const Announcements = () => {
  const images = [
    {
      src: "/assets/images/announcements/img1.jpeg",
      alt: "Night of the Shahadat of Imam Hasan Al-Askari",
    },
    { src: "/assets/images/announcements/img2.jpeg", alt: "Eid Az Zahra" },
    {
      src: "/assets/images/announcements/img3.jpeg",
      alt: "Ladies Morning Program",
    },
    {
      src: "/assets/images/announcements/img4.jpeg",
      alt: "Elections for the Zainabiya Islamic Centre",
    },
    {
      src: "/assets/images/announcements/img5.jpeg",
      alt: "Volunteer Opportunity",
    },
    {
      src: "/assets/images/announcements/img6.jpeg",
      alt: "Celebrating the birthday of Prophet Muhammad",
    },
    { src: "/assets/images/announcements/img7.jpeg", alt: "Milad Un Nabi" },
    {
      src: "/assets/images/announcements/img8.jpeg",
      alt: "Wiladat of the Prophet & Imam Sadiq",
    },
    {
      src: "/assets/images/announcements/img9.jpeg",
      alt: "Milad-Un-Nabi Bake Sale",
    },
    {
      src: "/assets/images/announcements/img10.jpeg",
      alt: "Interactive Presentation By Dr. Sibtain Panjwani",
    },
    {
      src: "/assets/images/announcements/img11.jpeg",
      alt: "Jaffari Online Institute",
    },
    {
      src: "/assets/images/announcements/img12.jpeg",
      alt: "10th Anniversary - Khoja Heritage",
    },
  ];

  return (
    <div className="flex flex-col place-items-center gap-8 bg-zinc-500 py-10">
      <h2 className="text-center font-semibold text-white">Announcements</h2>
      <div className="flex w-full content-center justify-center">
        <Swiper
          className="max-w-2xl text-black"
          spaceBetween={50}
          slidesPerView={1}
        >
          {images.map((image, index) => (
            <SwiperSlide
              key={index}
              className="flex content-center justify-center"
            >
              <div
                className="h-72 w-72 max-w-md bg-cover bg-center object-cover backdrop-brightness-50"
                style={{ backgroundImage: `url(${image.src})` }}
              >
                <div className="flex h-72 w-72 place-items-center content-center justify-center text-center text-white backdrop-brightness-50">
                  <p className="mx-2 h-fit">{image.alt}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="card w-72 bg-slate-900 text-neutral-content">
        <div className="card-body items-center text-center">
          <h2 className="card-title">Engagements</h2>
          <div className="my-2">
            <p>Muzammil Khalfan</p>
            <p>and</p>
            <p>Fatema Jaffer</p>
          </div>
          <div className="card-actions justify-end">
            <button className="btn bg-white text-black hover:bg-zinc-600">
              See More Engagements
            </button>
          </div>
        </div>
      </div>
      <div className="card w-72 bg-slate-900 text-neutral-content">
        <div className="card-body items-center text-center">
          <h2 className="card-title">Obituaries</h2>
          <p>Marhūm Husein Mohamedtaki Shermohamed</p>
          <div className="card-actions justify-end">
            <button className="btn bg-white text-black hover:bg-zinc-600">
              See More Obituaries
            </button>
          </div>
        </div>
      </div>
      <div className="card w-72 bg-slate-900 text-neutral-content">
        <div className="card-body items-center text-center">
          <h2 className="card-title">Dua Shifa</h2>
          <p>John Doe</p>
          <div className="card-actions justify-end">
            <button className="btn bg-white text-black hover:bg-zinc-600">
              See More Dua Requests
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
