// src/components/services/ServiceModal.jsx
import styles from "./ServiceModal.module.scss";

export default function ServiceModal({ service, onClose }) {
  if (!service) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button
          className={styles.close}
          onClick={onClose}
        >
          ✕
        </button>

        <h2>{service.title}</h2>
        <p
          dangerouslySetInnerHTML={{ __html: service.details }}
        />
      </div>
    </div>
  );
}

