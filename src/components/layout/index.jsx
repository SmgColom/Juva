import styles from './Layout.module.scss';
import Hero from '../layout/Hero/Hero.jsx';


function Layout(props) {
  return (
    <div className={`${styles.app}`}>
      <Hero />
      <main className={styles.main}>
        {props.children}
      </main> 
    </div>
  );
}

export default Layout;