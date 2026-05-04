import styles from "./Calculator.module.scss";
import CalculatorForm from "./CalculatorForm";

export default function CalculatorSection() {
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>Quote Your Service</h2>
      <p className={styles.subtitle}>
        Tell us a few details about your home and we'll contact you with a
        tailored cleaning quote.
      </p>
      <div className={styles.CalculatorContainer}>
        <CalculatorForm />
      </div>
    </section>
  );
}