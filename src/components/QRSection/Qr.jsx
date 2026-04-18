import Image from "next/image";
import styles from "./Qr.module.scss";

export default function Qr() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <h2 className={styles.title}>Text Us</h2>

        <div className={styles.features}>
          <div className={styles.qrBox}>
            <h3>Scan the QR code</h3>

            <div className={styles.qrImages}>
              <div className={styles.qrItem}>
                <h4>Text Us</h4>
                <Image
                  src="/QR1.png"
                  alt="QR code to send SMS option 1"
                  width={140}
                  height={140}
                />
              </div>

              <div className={styles.qrItem}>
                <h4>Text Us</h4>
                <Image
                  src="/QR2.png"
                  alt="QR code to send SMS option 2"
                  width={140}
                  height={140}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}