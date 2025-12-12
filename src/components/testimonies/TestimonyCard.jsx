// src/components/services/ServiceCard.jsx
import styles from "./TestimonyCard.module.scss";

export default function TestimonyCard({ testimony }) {
  return (
    <div className={styles.card}>

      <h3>{testimony.name}</h3>
      <p>{testimony.testimony}</p>
    </div>
  );
}

