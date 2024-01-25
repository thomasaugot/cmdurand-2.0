"use client";

import { EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { useEffect, useState } from "react";
import Image from "next/image";
import bardage from "/assets/img/bardage.jpg";

const Carousel = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 1023);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const images = [
    {
      id: 1,
      imageUrl: bardage,
    },
    {
      id: 2,
      imageUrl: bardage,
    },
    {
      id: 3,
      imageUrl: bardage,
    },
    {
      id: 4,
      imageUrl: bardage,
    },
    {
      id: 5,
      imageUrl: bardage,
    },
  ];

  const slidesPerView = isMobile
    ? 1
    : window.innerWidth >= 768 && window.innerWidth <= 1024
    ? 2
    : 3;

  return (
    <Swiper
      effect={"coverflow"}
      initialSlide={1}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={slidesPerView}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      navigation={true}
      pagination={{ clickable: true }}
      modules={[EffectCoverflow, Pagination]}
      className="py-24"
    >
      {images.map((item, index) => (
        <SwiperSlide key={item.id} className="w-[18vw] mt-5">
          <Image src={item.imageUrl} alt="image" className="w-full h-full" />
        </SwiperSlide>
      ))}
      <div className="mt-[50px]"></div>
    </Swiper>
  );
};

export default Carousel;
