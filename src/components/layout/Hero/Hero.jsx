import Image from "next/image";
import styles from "./Hero.module.scss";

export default function Hero() {
  return (
    <div className={styles.wrapper}>

      {/* COLUMNA IZQUIERDA */}
      <div className={styles.left}>
        <h1 className={styles.title}>Book Your First Clean Today!</h1>

        <button className={styles.cta}>Book Now !</button>

        <div className={styles.features}>
          <ul>
            <li>Trusted professionals</li>
            <li>Cleanliness and Order</li>
            <li>Availability</li>
          </ul>

          <ul>
            <li>High Attention To Detail</li>
            <li>Open Communication To Understand Your needs</li>
            <li>Order that makes everything look good</li>
          </ul>
        </div>
      </div>

      {/* COLUMNA DERECHA */}
      <div >
        <Image className={styles.right}
          src="/Logo.png"
          alt="Hero image"
          width={550}
          height={550}
          priority
        />
      </div>

    </div>
  );
}

