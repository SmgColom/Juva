// src/components/services/ServiceModal.jsx
import styles from "./ServiceModal.module.scss";

export default function ServiceModal({ service, onClose }) {
  if (!service) return null;

  console.log('SERVICE EN MODAL 👉', service);

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button className={styles.close} onClick={onClose}>✕</button>

        <img
          src={service.icon}
          alt={service.title}
          className={styles.icon}
        />

        <h2>{service.title}</h2>
        <p dangerouslySetInnerHTML={{ __html: service.details }} />
      </div>
    </div>
  );
}
