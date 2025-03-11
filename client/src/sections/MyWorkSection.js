import { useContext, useRef } from 'react';
import styles from './MyWorkSection.module.scss';
import { AppContext } from "../context/AppContext";

import SimpleWebsite from "../images/barber.png";
import WebApp from "../images/web app.png";

function MyWorkSection() {
  const { language, color } = useContext(AppContext);
  const divRef = useRef(null);

  return (
    <div className={`${styles.two} observed`} ref={divRef}>
      <div className={`${styles.content} ${styles.hidden} fade-in-div`}>
        <div id="two"></div>
        <div style={{marginBottom: "50px"}} className={styles["navi-text-on-middle"]}>{language.navi_text2}</div>
        <div onClick={()=> { window.open("https://frizerski-b5b80a1cae65.herokuapp.com/"); }} style={{marginBottom: "70px"}} className={styles["work-block"]}>
          <img src={SimpleWebsite}></img>
          <div></div>
          <p className={styles["white-to-black"]}><span style={{color: color.value}}>{language.work_text1}</span> {language.work_text2}</p>
          <p className={styles["white-to-black"]}>{language.work_text3}</p>
          <p><span style={{color: color.value}}>{language.work_text4}</span> <span className={styles["white-to-black"]}>100€</span></p>
          <div style={{background: "#e0e0e0"}}></div>
        </div>
        <div onClick={()=> { window.open("https://part-picker-28e08f70601f.herokuapp.com/"); }} className={styles["work-block"]}>
          <img src={WebApp}></img>
          <div></div>
          <p><span style={{color: color.value}}>{language.work_text5}</span> {language.work_text6}</p>
          <p>{language.work_text7}</p>
          <p><span style={{color: color.value}}>{language.work_text4}</span> 1.500€</p>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default MyWorkSection;