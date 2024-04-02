/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { useEffect, useState } from "react";
import Image from "next/image";
import { IoMdClose } from "react-icons/io";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";

import bardage from "/assets/img/bardage.jpg";
import charpenteTrad from "/assets/img/charp-trad.jpg";
import charpenteIndus from "/assets/img/charp-indus.jpg";
import terrasse from "/assets/img/terrasse.jpg";
import preau from "/assets/img/préau.jpg";
import carouselItem1 from "/assets/img/AKNE8751.jpg";
import carouselItem2 from "/assets/img/BYPV7724.jpg";
import carouselItem3 from "/assets/img/EOHC9449.jpg";
import carouselItem4 from "/assets/img/IMG_3889.jpg";
import carouselItem5 from "/assets/img/IMG_4307.jpg";
import carouselItem6 from "/assets/img/IMG_4882.jpg";
import carouselItem7 from "/assets/img/IMG_4970.jpg";
import carouselItem8 from "/assets/img/QTML4315.jpg";
import carouselItem9 from "/assets/img/XTLI1839.jpg";
import carouselItem11 from "/assets/img/solivage.jpg";
import carouselItem12 from "/assets/img/carport.jpg";
import carouselItem14 from "/assets/img/home.webp";
import carouselItem15 from "/assets/img/bardage2.jpg";
import carouselItem16 from "/assets/img/IMG_4976.jpg";
import carouselItem17 from "/assets/img/isqhf.jpg";
import carouselItem18 from "/assets/img/menuiserie-ext.jpg";
import carouselItem19 from "/assets/img/menuiserie-g.jpg";
import carouselItem25 from "/assets/img/IMG_5272.jpg";
import carouselItem20 from "/assets/img/IMG_5161.jpg";
import carouselItem21 from "/assets/img/IMG_5110.jpg";
import carouselItem22 from "/assets/img/EDZO9181.jpg";
import carouselItem23 from "/assets/img/vjk.jpg";
import carouselItem24 from "/assets/img/IMG_5528.jpg";

const Carousel = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [zoomedImage, setZoomedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

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

  useEffect(() => {
    const preloadImages = async () => {
      try {
        await Promise.all([
          bardage,
          charpenteTrad,
          charpenteIndus,
          terrasse,
          preau,
          carouselItem1,
          carouselItem2,
          carouselItem3,
          carouselItem4,
          carouselItem5,
          carouselItem6,
          carouselItem7,
          carouselItem8,
          carouselItem9,
          carouselItem11,
          carouselItem12,
          carouselItem14,
          carouselItem15,
          carouselItem16,
          carouselItem17,
          carouselItem18,
          carouselItem19,
          carouselItem20,
          carouselItem21,
          carouselItem22,
          carouselItem23,
          carouselItem24,
          carouselItem25,
        ]);
        setImagesLoaded(true); // Set state to indicate that images are loaded
      } catch (error) {
        console.error("Failed to preload images:", error);
      }
    };

    preloadImages();
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (zoomedImage !== null) {
      setCurrentImageIndex(images.findIndex((item) => item.imageUrl === zoomedImage));
    }
  }, [zoomedImage, images]);

  const slidesPerView = isMobile ? 1 : 3;

  const openZoomedImage = (imageUrl) => {
    setZoomedImage(imageUrl);
  };

  const closeZoomedImage = () => {
    setZoomedImage(null);
  };

  const gotoNextImg = () => {
    if (currentImageIndex < images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
      setZoomedImage(images[currentImageIndex + 1].imageUrl);
    }
  };

  const gotoPrevImg = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
      setZoomedImage(images[currentImageIndex - 1].imageUrl);
    }
  };

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
              onClick={() => openZoomedImage(item.imageUrl)}
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

      {zoomedImage && !isMobile && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex justify-center items-center z-50">
          <div className="relative max-w-[75vw] max-h-[85vh]">
            <button
              onClick={closeZoomedImage}
              className="absolute top-0 right-0 m-4 text-white text-5xl"
            >
              <IoMdClose />
            </button>
            {currentImageIndex < images.length - 1 && (
              <button
                className="absolute top-1/2 right-0 transform -translate-y-1/2 p-4 text-white text-6xl"
                onClick={gotoNextImg}
              >
                <GrFormNext />
              </button>
            )}
            {currentImageIndex > 0 && (
              <button
                className="absolute top-1/2 left-0 transform -translate-y-1/2 p-4 text-white text-6xl"
                onClick={gotoPrevImg}
              >
                <GrFormPrevious />
              </button>
            )}
            <div className="w-full h-full overflow-hidden">
              <Image
                src={zoomedImage}
                alt="zoomed-image"
                layout="responsive"
                objectFit="contain"
                className="max-h-[90vh] "
                style={{ userSelect: "none", pointerEvents: "none" }}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Carousel;
