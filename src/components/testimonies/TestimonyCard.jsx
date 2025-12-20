import styles from "./TestimonyCard.module.scss";

export default function TestimonyCard({ testimony }) {
  return (
    <div className={styles.card}>
      <span className={styles.quoteStart}>“</span>

      <h3 className={styles.name}>{testimony.name}</h3>

      <p className={styles.testimony}>{testimony.testimony}</p>

      <span className={styles.quoteEnd}>”</span>
    </div>
  );
}

