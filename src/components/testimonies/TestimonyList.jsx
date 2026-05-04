import { useState, useEffect } from "react";
import { testimonies } from "../../data/testimonies.js";
import TestimonyCard from "./TestimonyCard.jsx";
import styles from "./TestimonyList.module.scss";

export default function TestimoniesList() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 2) % testimonies.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  const visible = [
    testimonies[index % testimonies.length],
    testimonies[(index + 1) % testimonies.length],
  ];

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <h2 className={styles.title}>What Our Clients Say</h2>
        <div className={styles.grid}>
          {visible.map((testimony) => (
            <TestimonyCard key={testimony.id} testimony={testimony} />
          ))}
        </div>
      </div>
    </div>
  );
}