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
import carouselItem11 from "/assets/img/solivage.jpg";
import carouselItem12 from "/assets/img/carport.jpg";
import carouselItem14 from "/assets/img/home.webp";
import carouselItem15 from "/assets/img/bardage2.jpg";
import carouselItem16 from "/assets/img/IMG_4976.png";
import carouselItem17 from "/assets/img/isqhf.png";
import carouselItem18 from "/assets/img/menuiserie-ext.jpg";
import carouselItem19 from "/assets/img/menuiserie-g.jpg";
import carouselItem25 from "/assets/img/IMG_5272.jpg";
import carouselItem20 from "/assets/img/IMG_5161.jpg";
import carouselItem21 from "/assets/img/IMG_5110.jpg";
import carouselItem22 from "/assets/img/EDZO9181.PNG";
import carouselItem23 from "/assets/img/vjk.jpg";
import carouselItem24 from "/assets/img/IMG_5528.jpg";

const Carousel = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768); // Adjust the threshold as needed
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
    {
      id: 15,
      imageUrl: carouselItem11,
    },
    {
      id: 16,
      imageUrl: carouselItem12,
    },
    {
      id: 17,
      imageUrl: carouselItem15,
    },
    {
      id: 18,
      imageUrl: carouselItem14,
    },
    {
      id: 20,
      imageUrl: carouselItem16,
    },
    {
      id: 21,
      imageUrl: carouselItem17,
    },
    {
      id: 22,
      imageUrl: carouselItem18,
    },
    {
      id: 23,
      imageUrl: carouselItem19,
    },
    {
      id: 24,
      imageUrl: carouselItem20,
    },
    {
      id: 25,
      imageUrl: carouselItem21,
    },
    {
      id: 26,
      imageUrl: carouselItem22,
    },
    {
      id: 27,
      imageUrl: carouselItem23,
    },
    {
      id: 28,
      imageUrl: carouselItem24,
    },
  ];

  const slidesPerView = isMobile ? 1 : 3;

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
        className="absolute my-24 lg:my-20 max-w-[1400px]"
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
