import { useContext } from 'react';
import styles from './PricingSection.module.scss';
import { AppContext } from "../context/AppContext";
import PriceBlock from '../components/PriceBlock';
import { constants } from "../misc/constants";

function PricingSection({ setWebsiteOption }) {
  const { language, color } = useContext(AppContext);
  const { website_options } = constants();

  return (
    <div className={`${styles.three} observed`}>
      <div className={`${styles.content} ${styles.hidden} fade-in-div`}>
        <div id="three"></div>
        <div style={{marginBottom: "35px"}} className={styles["navi-text-on-middle"]}>{language.navi_text3}</div>
          <div className={`${styles["price-wrapper"]} ${styles.hidden} fade-in-div`}>
            <PriceBlock 
              title={language.pricing_text1}
              price={10}
              benefits={[language.pricing_text5, language.pricing_text6]}
              chooseOption={() => setWebsiteOption(website_options[language.name][0])}
            />
            <PriceBlock 
              title={language.pricing_text3}
              price={15}
              background={true}
              benefits={[language.pricing_text7, language.pricing_text8, language.pricing_text9, language.pricing_text10]}
              chooseOption={() => setWebsiteOption(website_options[language.name][1])}
            />
          </div>
        <p style={{marginTop: "50px", fontWeight: "370"}}>* {language.pricing_text11} <span style={{color: color.value, filter: "brightness(1.5)"}}>responsive</span> {language.pricing_text12}</p>
        <p style={{marginTop: "10px", fontWeight: "370"}}>* {language.pricing_text13}</p>
      </div>  
    </div>
  );
}

export default PricingSection;