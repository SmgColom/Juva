import styles from "./Layout.module.scss";

export default function Layout({ children }) {
  return (
    <div className={styles.app}>
      <main className={styles.main}>
     
        {children}
      </main>
    </div>
  );
}

