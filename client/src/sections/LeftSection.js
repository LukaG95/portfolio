import { useContext } from 'react';
import styles from './LeftSection.module.scss';
import { AppContext } from "../context/AppContext"; 
import Discord from "../images/discord.png";
import Twitter from "../images/twitter.png";
import Instagram from "../images/instagram.png";
import Facebook from "../images/facebook.png";
import Profile from "../images/profile.png";
import Logo from "../images/logo.png";
import useWindowDimensions from '../WindowDimensions.js';

function LeftSection({ handleNavItemClick }) {
  const { s_width } = useWindowDimensions();
  const { language, color } = useContext(AppContext);

  return (
    <div className={styles.left}>
      <div className={styles.placeholder}>
        <div className={styles.top}>
          <div>Luka</div>
          <div>
            <div>{language.placeholder_text1}</div>
            <div>{language.placeholder_text2}</div>
          </div>
          <img src={Logo}  />
        </div>
        <div className={styles["profile-image-wrapper"]}>
          <div className={styles["profile-image-background"]}></div>
          <img className={styles["profile-image"]} src={Profile}  />

        </div>
        <div className={styles["mail-place"]}>
          <div>glukec4@gmail.com</div>
          <div>Ljubljana, SL</div>
        </div>
        <div className={styles.socials}>
          <div className={styles[`hover-border-${color.name}`]}><img src={Discord} style={{width: 13}}></img></div>
          <div className={styles[`hover-border-${color.name}`]}><img src={Twitter}></img></div>
          <div className={styles[`hover-border-${color.name}`]}><img src={Instagram}></img></div>
          <div className={styles[`hover-border-${color.name}`]}><img src={Facebook}></img></div>
        </div>
        <div className={`${styles["hire-me-button"]}`} style={{background: color.value, borderBottomColor: color.dark}} onClick={()=> handleNavItemClick(3, "#four")}>
          {language.placeholder_text3}
        </div>
      </div>
    </div>
  );
}

export default LeftSection;