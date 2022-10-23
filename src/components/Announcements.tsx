import { Swiper, SwiperSlide } from 'swiper/react';

export const Announcements = () => {
  const images = [
    '/assets/images/announcements/img1.jpeg',
    '/assets/images/announcements/img2.jpeg',
    '/assets/images/announcements/img3.jpeg',
    '/assets/images/announcements/img4.jpeg',
    '/assets/images/announcements/img5.jpeg',
    '/assets/images/announcements/img6.jpeg',
    '/assets/images/announcements/img7.jpeg',
    '/assets/images/announcements/img8.jpeg',
    '/assets/images/announcements/img9.jpeg',
    '/assets/images/announcements/img10.jpeg',
    '/assets/images/announcements/img11.jpeg',
    '/assets/images/announcements/img12.jpeg',
  ];

  return (
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
            <img
              alt="announcement"
              className="w-full h-fit max-w-md"
              src={image}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
