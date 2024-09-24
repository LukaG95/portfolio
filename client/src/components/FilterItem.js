import React, { useEffect, useState } from 'react';
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
      <div style={{zIndex: 2, justifyContent: moreLength && "start", paddingLeft: moreLength && "20px", fontSize: moreLength && "16px"}}>
        {isImageOption ? (
          <img src={currentOption.src} alt={currentOption.name} />
        ) : (
          currentOption.name
        )}
      </div>

      {displayDropdown()}

    </div>
  );

  function displayDropdown() {

    return options
      .filter(option => option.name !== currentOption.name)
      .map((option, index) => (
        <div
          key={option.name}
          onClick={() => onOptionChange(option)}
          style={dropdownStyle(index)}
        >
          {isImageOption ? (
            <img src={option.src} alt={option.name} style={{ width: '20px' }} />
          ) : (
            option.name
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

    let style;
    if (open) style = open_styling 
    else style = closed_styling

    if (moreLength){
      style.justifyContent = "start";
      style.paddingLeft = "20px";
      style.fontSize = "16px";
    }

    return style;
  }


  function customStyle() {
    const style = {};

    if (moreLength){
      style.width = "260px";
      style.marginBottom = "0px";

      
      if (s_width <= 1180){
        style.position = "absolute";
        style.top = "103px";
        style.width = "100%";
      }
    }

    if (open){
      style.height = `${options.length*60}px`;
    }

    return style;

  }

};

export default FilterItem;
