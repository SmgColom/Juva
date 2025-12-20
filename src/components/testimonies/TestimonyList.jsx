import { useState } from "react";
import { testimonies } from "../../data/testimonies.js";
import TestimonyCard from "./TestimonyCard.jsx";
import styles from "./TestimonyList.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function TestimoniesList() {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.titulo}>What Our Clients Say</h1>

      <Swiper
        modules={[Autoplay]}
        spaceBetween={32}
        slidesPerView={2}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        loop={true}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
        }}
        className={styles.grid}
      >
        {testimonies.map((testimony) => (
          <SwiperSlide key={testimony.id}>
            <TestimonyCard testimony={testimony} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}


