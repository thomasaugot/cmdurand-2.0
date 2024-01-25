"use client";

import { EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { useEffect, useState } from "react";
import Image from "next/image";
import bardage from "/assets/img/bardage.jpg";
import charpenteTrad from "/assets/img/charp-trad.jpg";
import charpenteIndus from "/assets/img/charp-indus.jpg";
import ossature from "/assets/img/ossature.jpg";
import preau from "/assets/img/préau.jpg";

const Carousel = () => {
  const [isMobile, setIsMobile] = useState(false);

  //   const handleResize = () => {
  //     setIsMobile(window.innerWidth < 1023);
  //   };

  //   useEffect(() => {
  //     handleResize();
  //     window.addEventListener("resize", handleResize);
  //     return () => {
  //       window.removeEventListener("resize", handleResize);
  //     };
  //   }, []);

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
      imageUrl: ossature,
    },
    {
      id: 5,
      imageUrl: preau,
    },
  ];

  //   const slidesPerView = isMobile
  //     ? 1
  //     : window.innerWidth >= 768 && window.innerWidth <= 1024
  //     ? 2
  //     : 3;

  return (
    <>
      <Swiper
        effect={"coverflow"}
        initialSlide={1}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
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
        className=" absolute my-24"
      >
        {images.map((item, index) => (
          <SwiperSlide key={item.id} className="w-[18vw] my-20 relative">
            <div
              style={{
                width: "300px",
                height: "270px",
              }}
            >
              <Image
                src={item.imageUrl}
                alt="image"
                layout="fill"
                objectFit="cover"
                style={{ boxShadow: "0px 0px 63px 3px rgba(0,0,0,0.75)" }}
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
