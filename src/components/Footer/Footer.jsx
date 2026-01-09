import styles from './Footer.module.scss'
import { GrInstagram } from "react-icons/gr";
import { FaFacebook } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";

function Footer() {
  const getCurrentYear = () => new Date().getFullYear();

  return (
    <div className={styles.footerwrapper}>
        <div className={styles.socialIcons}>
          <a href="" title="Instagram" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><GrInstagram  size={30}/></a>
          <a href="" title="Facebook" aria-label="Facebook" target="_blank" rel="noopener noreferrer"><FaFacebook size={30} /></a>
          <a href="https://www.tiktok.com/@juva_cleaning?lang=en" title="Tiktok" aria-label="Tiktok" target="_blank" rel="noopener noreferrer"><AiFillTikTok size={30} /></a>
        </div>
        <span>&copy; {getCurrentYear()}</span>
    </div>
  );
}

export default Footer;
