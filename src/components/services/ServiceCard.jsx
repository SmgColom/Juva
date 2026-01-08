// src/components/services/ServiceCard.jsx
import styles from "./ServiceCard.module.scss";

export default function ServiceCard({ service, onOpen }) {
  return (
    <div className={styles.card}>
      <img
        src={service.icon}
        alt={service.title}
        className={styles.icon}
      />

      <h3>{service.title}</h3>
      <p>{service.description}</p>
      <h3>{service.price}</h3>

      <button
        className={styles.more}
        onClick={() => onOpen(service)}
      >
        +
      </button>
    </div>
  );
}

