import { useState, useContext } from 'react';
import styles from './Navbar.module.scss';
import NavItem from './NavItem.js';
import FilterItem from './FilterItem.js';
import useWindowDimensions from '../WindowDimensions.js';

import User from '../images/user.png';
import Work from '../images/work.png';
import Pricing from '../images/pricing.png';
import Email from '../images/email.png';
import { info } from '../misc/info.js';
import { AppContext } from '../context/AppContext';

function Navbar({ selectedIndex, setSelectedIndex, setShowSidebar }) {
  const { s_width } = useWindowDimensions();
  const { languages, colors } = info();

  const handleNavItemClick = (index, id) => {
    setSelectedIndex(index);

    const el = document.querySelector(id);

    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    else console.log("no element")
  };

  const { language, setLanguage, selectedColor, setSelectedColor } = useContext(AppContext);

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