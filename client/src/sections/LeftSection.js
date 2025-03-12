import { useContext, useState } from 'react';
import styles from './LeftSection.module.scss';
import { AppContext } from "../context/AppContext"; 
import { ReactComponent as Discord } from '../images/discord.svg';
import { ReactComponent as Twitter } from '../images/twitter.svg';
import { ReactComponent as Instagram } from '../images/instagram.svg';
import { ReactComponent as Facebook } from '../images/facebook.svg';

import Profile from "../images/profile.png";
import Logo from "../images/logo.png";
import useWindowDimensions from '../WindowDimensions.js';

function LeftSection({ handleNavItemClick }) {
  const [openDiscord, setOpenDiscord] = useState(false);
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
          <div>dev@lukagolob.com</div>
          <div>Ljubljana, SL</div>
        </div>
        <div className={styles.socials}>
          <div onMouseEnter={()=> setOpenDiscord(true)} onMouseLeave={()=> setOpenDiscord(false)}> 
            { openDiscord && <section className={styles["discord-username"]}>ryutrading</section> }
            <Discord 
              className={styles.icon} 
              width={20.67} 
              height={16.79} 
            /> 
          </div>
          <div onClick={() => window.open("https://x.com/LukaGolob_")}> 
            <Twitter 
              className={styles.icon} 
              width={21} 
              height={17} 
            /> 
          </div>
          <div onClick={() => window.open("https://www.instagram.com/lukaluxie/")}> 
            <Instagram 
              className={styles.icon} 
              width={20} 
              height={20} 
            /> 
          </div>
          <div onClick={() => window.open("https://www.facebook.com/luka.golob.35/")}> 
            <Facebook 
              className={styles.icon} 
              width={20} 
              height={20} 
            /> 
          </div>
        </div>
        <div className={`${styles["hire-me-button"]}`} style={{background: color.value, borderBottomColor: color.dark}} onClick={()=> handleNavItemClick(3, "#four")}>
          {language.placeholder_text3}
        </div>
      </div>
    </div>
  );
}

export default LeftSection;