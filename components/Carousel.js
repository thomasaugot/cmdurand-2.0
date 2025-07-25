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

import carouselItem1 from "@/assets/img/bardage/img3.webp";
import carouselItem2 from "@/assets/img/charpente-traditionelle/img2.webp";
import carouselItem3 from "@/assets/img/charpente-industrielle/img1.webp";
import carouselItem5 from "@/assets/img/préau/img1.webp";
import carouselItem6 from "@/assets/img/charpente-traditionelle/img13.webp";
import carouselItem7 from "@/assets/img/charpente-traditionelle/img4.webp";
import carouselItem8 from "@/assets/img/extension-maison-ossature/img1.webp";
import carouselItem10 from "@/assets/img/charpente-traditionelle/img6.webp";
import carouselItem11 from "@/assets/img/extension-maison-ossature/img3.webp";
import carouselItem13 from "@/assets/img/charpente-traditionelle/img9.webp";
import carouselItem14 from "@/assets/img/extension-maison-ossature/img5.webp";
import carouselItem15 from "@/assets/img/terrasse/img1.webp";
import carouselItem16 from "@/assets/img/charpente-traditionelle/img15.webp";
import carouselItem17 from "@/assets/img/charpente-traditionelle/img22.webp";
import carouselItem18 from "@/assets/img/extension-maison-ossature/img7.webp";
import carouselItem19 from "@/assets/img/charpente-traditionelle/img19.webp";
import carouselItem20 from "@/assets/img/charpente-traditionelle/img14.webp";
import carouselItem21 from "@/assets/img/terrasse/img2.webp";
import carouselItem22 from "@/assets/img/charpente-traditionelle/img21.webp";
import carouselItem23 from "@/assets/img/extension-maison-ossature/img2.webp";
import carouselItem24 from "@/assets/img/home.webp";
import carouselItem25 from "@/assets/img/charpente-traditionelle/img25.webp";
import carouselItem26 from "@/assets/img/terrasse/img3.webp";

const Carousel = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [zoomedImage, setZoomedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  const images = [
    { id: 1, imageUrl: carouselItem1 },
    { id: 2, imageUrl: carouselItem2 },
    { id: 3, imageUrl: carouselItem3 },
    { id: 5, imageUrl: carouselItem5 },
    { id: 6, imageUrl: carouselItem6 },
    { id: 7, imageUrl: carouselItem7 },
    { id: 8, imageUrl: carouselItem8 },
    { id: 10, imageUrl: carouselItem10 },
    { id: 11, imageUrl: carouselItem11 },
    { id: 13, imageUrl: carouselItem13 },
    { id: 14, imageUrl: carouselItem14 },
    { id: 15, imageUrl: carouselItem15 },
    { id: 16, imageUrl: carouselItem16 },
    { id: 17, imageUrl: carouselItem17 },
    { id: 18, imageUrl: carouselItem18 },
    { id: 19, imageUrl: carouselItem19 },
    { id: 20, imageUrl: carouselItem20 },
    { id: 21, imageUrl: carouselItem21 },
    { id: 22, imageUrl: carouselItem22 },
    { id: 23, imageUrl: carouselItem23 },
    { id: 24, imageUrl: carouselItem24 },
    { id: 25, imageUrl: carouselItem25 },
    { id: 26, imageUrl: carouselItem26 },
  ];

  useEffect(() => {
    const preloadImages = async () => {
      try {
        await Promise.all(
          images.map((item) => {
            const img = new window.Image();
            img.src = item.imageUrl.src || item.imageUrl;
            return img;
          })
        );
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
      setCurrentImageIndex(
        images.findIndex((item) => item.imageUrl === zoomedImage)
      );
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
        {images.map((item) => (
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
                alt={`image-${item.id}`}
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
                className="max-h-[90vh]"
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
