import { useState } from 'react';
import styles from './Navbar.module.scss';
import NavItem from './NavItem.js';
import FilterItem from './FilterItem.js';
import useWindowDimensions from '../WindowDimensions.js';

import User from '../images/user.png';
import Work from '../images/work.png';
import Pricing from '../images/pricing.png';
import Email from '../images/email.png';

import PaintRed from '../images/paint red.png';
import PaintGreen from '../images/paint green.png';
import PaintBlue from '../images/paint blue.png';

function Navbar({ selectedIndex, setSelectedIndex, setShowSidebar }) {

  const languages = [
    { value: "SLO" },
    { value: "ENG" }
  ];
  const colors = [
    { value: "red", src: PaintRed },
    { value: "green", src: PaintGreen },
    { value: "blue", src: PaintBlue },
  ];

  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [language, setLanguage] = useState(languages[1]);
  const { s_width } = useWindowDimensions();

  const handleNavItemClick = (index, id) => {
    setSelectedIndex(index);

    const el = document.querySelector(id);

    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    else console.log("no element")
  };

  return (
    <>
      <div className={styles.filters}>


      {
        s_width > 1130 ? 
          <>
            <FilterItem 
              options={languages} 
              currentOption={language} 
              onOptionChange={setLanguage}
              isImageOption={false}
            />

            <FilterItem 
              options={colors} 
              currentOption={selectedColor} 
              onOptionChange={setSelectedColor}
              isImageOption={true}
            />
          </>
           : 
          <div className={styles["open-sidebar-button"]} onClick={()=> { setShowSidebar(prev => !prev) }} >
            <div></div>
            <div></div>
            <div></div>
          </div>
      }
      

      </div>

      <div className={styles.navi}>
        <NavItem
          imageSrc={User}
          width={19}
          isSelected={selectedIndex === 0}
          onClick={() => handleNavItemClick(0, "#one")}
        />
        <NavItem
          imageSrc={Work}
          width={21}
          isSelected={selectedIndex === 1}
          onClick={() => handleNavItemClick(1, "#two")}
        />
        <NavItem
          imageSrc={Pricing}
          width={21}
          isSelected={selectedIndex === 2}
          onClick={() => handleNavItemClick(2, "#three")}
        />
        <NavItem
          imageSrc={Email}
          width={21}
          isSelected={selectedIndex === 3}
          onClick={() => handleNavItemClick(3, "#four")}
        />
      </div>
    </>
  );  


}

export default Navbar;