import { useState } from 'react';
import styles from './PriceBlock.module.scss';

function PriceBlock({benefits, price, title}) {
  const [mouseOverPrice, setMouseOverPrice] = useState(false);

  const newButtonStyle = {
    background: "#131313",
    border: "1px solid #BB5858"
  }
  
  return (
    <div 
      onMouseEnter={()=> setMouseOverPrice(true)}
      onMouseLeave={()=> setMouseOverPrice(false)}
      className={styles["price-block"]}
      style={ mouseOverPrice ? {border: "1px solid #BB5858"} : {} }
      >
      
      <div className={styles.title} style={{background: title === "ENTERPRISE" && "#322020"}}>{title}</div>
      <div className={styles["price-per-hour"]}><span style={{color: "#BB5858", fontSize: "40px", fontWeight: "700"}}>{price}€</span>&nbsp; / &nbsp;hour</div>
      <div className={styles.benefits}> {benefits.map(benefit => <p>{benefit}</p>)}</div>
      <div className={styles.choose}>Choose</div>

    </div>
  );
}

export default PriceBlock;