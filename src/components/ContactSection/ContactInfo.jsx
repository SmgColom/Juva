import styles from "./ContactForm.module.scss";
import { BsWhatsapp } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";

const ContactInfo = () => (
  <div className={styles.infoBox}>
    <div>
      <a
        href="https://wa.me/61415563521?text=Hi%21%20I%27d%20like%20to%20get%20more%20information%20about%20your%20cleaning%20service."
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className={styles.contact__icon}><BsWhatsapp /></div>
      </a>
      <h3>WhatsApp</h3>
      <p>415 563 521</p>
    </div>
    <div>
      <a href="mailto:juvacleaning@gmail.com">
        <div className={styles.contact__icon}><MdEmail /></div>
      </a>
      <h3>Email</h3>
      <p>juvacleaning@gmail.com</p>
    </div>
  </div>
);

export default ContactInfo;


