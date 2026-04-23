import styles from "./ImagesCard.module.scss";
import Image from "next/image";

export default function ImagesCard({ photo }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <h3 className={styles.name}>{photo.name}</h3>

        <div className={styles.imageFrame}>
          <Image
            className={styles.image}
            src={photo.image}
            alt={photo.name}
            width={220}
            height={220}
          />
        </div>
      </div>
    </div>
  );
}

