import React, { useState } from 'react';
import styles from './FilterItem.module.scss';
import useWindowDimensions from '../WindowDimensions.js';

const FilterItem = ({ options, currentOption, onOptionChange, isImageOption, moreLength }) => {
  const [open, setOpen] = useState(false);
  const { s_width, s_height } = useWindowDimensions();

  return (
    <div 
      onClick={() => setOpen(prev => !prev)} 
      className={styles.filter} 
      style={customStyle()}
    >
      <div  style={{zIndex: 2}}>
        {isImageOption ? (
          <img src={currentOption.src} alt={currentOption.value} />
        ) : (
          currentOption.value
        )}
      </div>

      {displayDropdown()}

    </div>
  );

  function displayDropdown() {
    return options
      .filter(option => option.value !== currentOption.value)
      .map((option, index) => (
        <div
          key={option.value}
          onClick={() => onOptionChange(option)}
          style={dropdownStyle(index)}
        >
          {isImageOption ? (
            <img src={option.src} alt={option.value} style={{ width: '20px' }} />
          ) : (
            option.value
          )}
        </div> 
      ));
  };




  function dropdownStyle (i){
    let open_styling = {
      visibility: "visible", 
      opacity: 1, 
      marginTop: `${(i+1) * 60}px`
    } 

    let closed_styling = {
      visibility: "hidden", 
      opacity: 0,
    }
    
    if (open) return open_styling 
    else return closed_styling
  }


  function customStyle() {
    const style = {};

    if (moreLength){
      style.width = "260px";
      style.marginBottom = "0px";
    }

    if (open){
      style.height = `${options.length*60}px`;
      console.log(style.height)
    }

    return style;

  }

};

export default FilterItem;
