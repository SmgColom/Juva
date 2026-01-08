import styles from "./ServiceModal.module.scss";

export default function ServiceModal({ service, onClose }) {
  if (!service) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button
          className={styles.close}
          onClick={onClose}
          aria-label="Close modal"
        >
          ✕
        </button>

        <img
          src={service.icon}
          alt={service.title}
          className={styles.icon}
        />

        <h2>{service.title}</h2>

        <div
          className={styles.content}
          dangerouslySetInnerHTML={{ __html: service.details }}
        />
      </div>
    </div>
  );
}

