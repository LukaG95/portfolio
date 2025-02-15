import { useContext } from 'react';
import styles from './PhoneSidebar.module.scss';
import FilterItem from './FilterItem';
import { constants } from "../misc/constants";
import { AppContext } from "../context/AppContext";

function PhoneSidebar({ showSidebar, setShowSidebar }) {
  const { languages, colors } = constants();
  const { language, setLanguage, color, setColor } = useContext(AppContext);

  return (
    <div className={`${styles["sidebar-wrapper"]} ${showSidebar && styles.open}`}>
      <div className={styles.sidebar}>
        <div className={styles["close-sidebar-wrapper"]}>
          <div className={styles["close-sidebar-button"]} onClick={() => setShowSidebar(false)}>
            <div></div>
            <div></div>
          </div>
        </div>
        <div className={styles["sidebar-filters-wrapper"]}>
          <FilterItem 
            options={languages} 
            currentOption={language} 
            onOptionChange={setLanguage}
            isImageOption={false}
          />
          <FilterItem 
            options={colors} 
            currentOption={color} 
            onOptionChange={setColor}
            isImageOption={true}
          />
        </div>
      </div>
    </div>
  );
}

export default PhoneSidebar;