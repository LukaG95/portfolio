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
      
      <div className={styles.title}>{title}</div>
        <div className={styles.benefits}>
          {benefits.map(benefit => <p>{benefit}</p>)}
        </div>
        <div className={styles.price}>From {price}€</div>
      <div className={styles["button-wrapper"]}><button style={ mouseOverPrice ? newButtonStyle : {} }>Select</button></div>

    </div>
  );
}

export default PriceBlock;