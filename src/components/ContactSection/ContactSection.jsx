import styles from "./ContactSection.module.scss";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

export default function ContactSection() {
  return (
        <section className={styles.wrapper}>
            <h2 className={styles.title}>Contact Us</h2>
            <div className={styles.ContactContainer}>
                <div ClassName={styles.ContactForm}>
                <ContactForm />
                </div>
                <div ClassName={styles.ContactInfo}>
                <ContactInfo />
                </div>
                
            </div>
        </section>
    );
}


