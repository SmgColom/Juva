import styles from "./ContactForm.module.scss";
import { BsWhatsapp } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";

const ContactInfo = () => (
  <div className={styles.infoBox}>
    <div>
      <a
        href="https://wa.me/573022460236?text=Hola!%20Quisiera%20hablar%20contigo%20sobre%20una%20consulta."
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className={styles.contact__icon}><BsWhatsapp /></div>
      </a>
      <h3>WhatsApp</h3>
      <p>302 246 0236</p>
    </div>
    <div>
      <a href="mailto:milena.toro@asesorsura.com">
        <div className={styles.contact__icon}><MdEmail /></div>
      </a>
      <h3>Correo</h3>
      <p>milena.toro@asesorsura.com</p>
    </div>
    <div>
      <a href="https://www.google.com/maps/place/Punto+Clave+-+Centro+Integral+de+Servicios./@6.2297246,-75.5766451,17z/data=!3m1!4b1!4m6!3m5!1s0x8e4429386f2d071b:0x1909cdb657bb546e!8m2!3d6.2297246!4d-75.5740648!16s%2Fg%2F1hm5pfrh_?entry=ttu&g_ep=EgoyMDI1MDYwMS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">
      <div className={styles.contact__icon}><IoLocationOutline /></div></a>
      <h3>Ubicación</h3>
      <p>Calle 27 #46-70, Local 144, Medellín</p>
    </div>
  </div>
);

export default ContactInfo;


