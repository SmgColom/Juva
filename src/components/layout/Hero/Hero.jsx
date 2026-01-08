import Image from "next/image";
import styles from "./Hero.module.scss";
import Button from '@/components/common/Button/Button';
import { FaCheck } from "react-icons/fa";

export default function Hero() {
  return (
    <div className={styles.wrapper}>

      <div className={styles.content}>
      {/* COLUMNA IZQUIERDA */}
      <div className={styles.left}>
        <h1 className={styles.title}>Book Your First Clean Today!</h1>

        <Button
          href="https://calendar.app.google/nawraayZFF6uA6kx7"
          target="_blank"
        >
          Book Now!
        </Button>

        <div className={styles.features}>
          <ul>
            <li><FaCheck /> Trusted professionals</li>
            <li><FaCheck /> Cleanliness and Order</li>
            <li><FaCheck /> Availability</li>
          </ul>

          <ul>
            <li><FaCheck /> High Attention To Detail</li>
            <li><FaCheck /> Open Communication To Understand Your needs</li>
            <li><FaCheck /> Order that makes everything look good</li>
          </ul>
        </div>
      </div>

      {/* COLUMNA DERECHA */}
      <div>
        <Image
          className={styles.right}
          src="/Logo.png"
          alt="Hero image"
          width={550}
          height={550}
          priority
        />
      </div>

    </div>
</div>
  );
}
      