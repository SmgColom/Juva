import Hero from "./Hero/Hero.jsx";
import Services from "./Hero/Services";  
import styles from "./Layout.module.scss";

export default function Layout({ children }) {
  return (
    <div className={styles.app}>
      <Hero />
      <Services />
      <main className={styles.main}>{children}</main>
    </div>
  );
}