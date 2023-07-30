"use client";
// components/ImagesContainer.js
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

type VehicleProps = {
  vehicle: {
    pictures: string[];
  };
};

const ImagesContainer = ({ vehicle }: VehicleProps) => {
  const numberOfSlides = Math.min(vehicle.pictures.length, 5); // Limit to maximum of 5 slides

  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      style={{
        height: "100%",
        minHeight: 300,
      }}
    >
      {vehicle.pictures.slice(0, numberOfSlides).map((picture, index) => (
        <SwiperSlide key={index}>
          <Image
            src={picture}
            alt=""
            fill={true}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            placeholder="blur"
            blurDataURL={picture}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImagesContainer;
