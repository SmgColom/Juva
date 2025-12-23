// src/components/services/ServicesList.jsx
import { useState } from "react";
import { services } from "../../data/services.js";
import ServiceCard from "./ServiceCard.jsx";
import ServiceModal from "./ServiceModal.jsx";
import styles from "./ServicesList.module.scss";

export default function ServicesList() {
  const [selected, setSelected] = useState(null);

  return (
    <section className={styles.wrapper}>
      <div className={styles.content}>
        <h2 className={styles.titulo}>Our Services</h2>

        <div className={styles.grid}>
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} onOpen={setSelected} />
          ))}
        </div>

        <ServiceModal service={selected} onClose={() => setSelected(null)} />
      </div>
    </section>
  );
}