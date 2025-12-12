import { useState } from "react";
import { testimonies } from "../../data/testimonies.js";
import TestimonyCard from "./TestimonyCard.jsx";
import styles from "./TestimonyList.module.scss";

export default function TestimoniesList() {
  const [selected, setSelected] = useState(null);

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.titulo}>What Our Clients Say</h1>

      <div className={styles.grid}>
        {testimonies.map((testimony => (
          <TestimonyCard
            key={testimony.id}
            testimony={testimony}
          />
        )))}
      </div>
    </div>
  );
}

