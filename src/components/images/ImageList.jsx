import { useState, useEffect } from "react";
import { photos } from "../../data/photos.js";
import ImagesCard from "./ImagesCard.jsx";
import styles from "./ImageList.module.scss";

export default function ImagesList() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 2) % photos.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  const visible = [
    photos[index % photos.length],
    photos[(index + 1) % photos.length],
  ];

  return (
    <section className={styles.wrapper}>
      <div className={styles.content}>
        <h2 className={styles.title}>See for yourself</h2>
        <div className={styles.grid}>
          {visible.map((photo) => (
            <ImagesCard key={photo.id} photo={photo} />
          ))}
        </div>
      </div>
    </section>
  );
}



