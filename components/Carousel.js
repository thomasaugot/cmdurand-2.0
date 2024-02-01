"use client";

import { EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { useEffect, useState } from "react";
import Image from "next/image";
import bardage from "/assets/img/bardage.jpg";
import charpenteTrad from "/assets/img/charp-trad.jpg";
import charpenteIndus from "/assets/img/charp-indus.jpg";
import terrasse from "/assets/img/terrasse.jpg";
import preau from "/assets/img/préau.jpg";
import carouselItem1 from "/assets/img/AKNE8751.PNG";
import carouselItem2 from "/assets/img/BYPV7724.PNG";
import carouselItem3 from "/assets/img/EOHC9449.PNG";
import carouselItem4 from "/assets/img/IMG_3889.jpg";
import carouselItem5 from "/assets/img/IMG_4307.jpg";
import carouselItem6 from "/assets/img/IMG_4882.jpg";
import carouselItem7 from "/assets/img/IMG_4970.jpg";
import carouselItem8 from "/assets/img/QTML4315.PNG";
import carouselItem9 from "/assets/img/XTLI1839.PNG";

const Carousel = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 1024); // Adjust the threshold as needed
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
      imageUrl: charpenteTrad,
    },
    {
      id: 3,
      imageUrl: charpenteIndus,
    },
    {
      id: 4,
      imageUrl: terrasse,
    },
    {
      id: 5,
      imageUrl: preau,
    },
    {
      id: 6,
      imageUrl: carouselItem1,
    },
    {
      id: 7,
      imageUrl: carouselItem2,
    },
    {
      id: 8,
      imageUrl: carouselItem3,
    },
    {
      id: 9,
      imageUrl: carouselItem4,
    },
    {
      id: 10,
      imageUrl: carouselItem5,
    },
    {
      id: 11,
      imageUrl: carouselItem6,
    },
    {
      id: 12,
      imageUrl: carouselItem7,
    },
    {
      id: 13,
      imageUrl: carouselItem8,
    },
    {
      id: 14,
      imageUrl: carouselItem9,
    },
  ];

  const slidesPerView = isMobile
    ? 1
    : typeof window !== "undefined" && window.innerWidth >= 1024 && window.innerWidth <= 1280
    ? 2
    : 3;

  return (
    <>
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
        // navigation={true}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination]}
        className="absolute my-12"
      >
        {images.map((item, index) => (
          <SwiperSlide key={item.id} className="w-full my-12 lg:my-20 relative">
            <div
              style={{
                width: "420px",
                height: "330px",
              }}
            >
              <Image
                src={item.imageUrl}
                alt="image"
                layout="fill"
                objectFit="cover"
                className="image-shadow"
              />
            </div>
          </SwiperSlide>
        ))}
        <div className="mt-[10px]"></div>
      </Swiper>
    </>
  );
};

export default Carousel;
