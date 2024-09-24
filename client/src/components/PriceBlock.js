import { useState, useContext } from 'react';
import styles from './PriceBlock.module.scss';
import { AppContext } from '../context/AppContext';

function PriceBlock({benefits, price, title, background, chooseOption}) {
  const [mouseOverPrice, setMouseOverPrice] = useState(false);
  const { color, language } = useContext(AppContext);

  const newButtonStyle = {
    background: "#131313",
    border: "1px solid #BB5858"
  }
  
  return (
    <div 
      onMouseEnter={()=> setMouseOverPrice(true)}
      onMouseLeave={()=> setMouseOverPrice(false)}
      className={styles["price-block"]}
      style={ mouseOverPrice ? {border: `1px solid ${color.value}`} : {} }
      >
      
      <div className={styles.title} style={{background: background && color.low}}>{title}</div>
      <div className={styles["price-per-hour"]}><span style={{color: color.value, fontSize: "40px", fontWeight: "700"}}>{price}€</span>&nbsp; / &nbsp;{language.pricing_text2}</div>
      <div className={styles.benefits}> {benefits.map(benefit => <p>{benefit}</p>)}</div>
      <div className={styles.choose} style={{background: color.value, borderBottomColor: color.dark}} onClick={() => {
        chooseOption();
        const el = document.querySelector("#four");
        el.scrollIntoView({ behavior: 'smooth' });
      }}>{language.pricing_text4}</div>

    </div>
  );
}

export default PriceBlock;