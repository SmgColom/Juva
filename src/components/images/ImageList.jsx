import { photos } from "../../data/photos.js";
import ImagesCard from "./ImagesCard.jsx";
import styles from "./ImageList.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function ImagesList() {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.titulo}>See for yourself</h2>

      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        loop={true}
        spaceBetween={32}
        slidesPerView={2}
        slidesPerGroup={2}
        breakpoints={{
          0: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 16,
          },
          768: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 10,
          },
          1367: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 10,
          },
        }}
        className={styles.grid}
      >
        {photos.map((photo) => (
          <SwiperSlide key={photo.id}>
            <ImagesCard photo={photo} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}



