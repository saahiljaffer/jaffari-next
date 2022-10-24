import { Swiper, SwiperSlide } from 'swiper/react';

export const Announcements = () => {
  const images = [
    {
      src: '/assets/images/announcements/img1.jpeg',
      alt: 'Night of the Shahadat of Imam Hasan Al-Askari',
    },
    { src: '/assets/images/announcements/img2.jpeg', alt: 'Eid Az Zahra' },
    {
      src: '/assets/images/announcements/img3.jpeg',
      alt: 'Ladies Morning Program',
    },
    {
      src: '/assets/images/announcements/img4.jpeg',
      alt: 'Elections for the Zainabiya Islamic Centre',
    },
    {
      src: '/assets/images/announcements/img5.jpeg',
      alt: 'Volunteer Opportunity',
    },
    {
      src: '/assets/images/announcements/img6.jpeg',
      alt: 'Celebrating the birthday of Prophet Muhammad',
    },
    { src: '/assets/images/announcements/img7.jpeg', alt: 'Milad Un Nabi' },
    {
      src: '/assets/images/announcements/img8.jpeg',
      alt: 'Wiladat of the Prophet & Imam Sadiq',
    },
    {
      src: '/assets/images/announcements/img9.jpeg',
      alt: 'Milad-Un-Nabi Bake Sale',
    },
    {
      src: '/assets/images/announcements/img10.jpeg',
      alt: 'Interactive Presentation By Dr. Sibtain Panjwani',
    },
    {
      src: '/assets/images/announcements/img11.jpeg',
      alt: 'Jaffari Online Institute',
    },
    {
      src: '/assets/images/announcements/img12.jpeg',
      alt: '10th Anniversary - Khoja Heritage',
    },
  ];

  return (
    <>
      <h2 className="text-black mb-2 font-semibold text-center">
        Announcements
      </h2>
      <div className="w-full flex justify-center content-center p-4">
        <Swiper
          className="max-w-2xl text-black"
          spaceBetween={50}
          slidesPerView={1}
        >
          {images.map((image, index) => (
            <SwiperSlide
              key={index}
              className="flex justify-center content-center"
            >
              <div
                className="h-72 w-72 max-w-md object-cover backdrop-brightness-50 bg-cover bg-center"
                style={{ backgroundImage: `url(${image.src})` }}
              >
                <div className="text-center place-items-center text-white flex content-center justify-center backdrop-brightness-50 h-72 w-72">
                  <p className="h-fit mx-2">{image.alt}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};
