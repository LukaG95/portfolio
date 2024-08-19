import React, { useState } from 'react';
import styles from './FilterItem.module.scss';
import useWindowDimensions from '../WindowDimensions.js';

const FilterItem = ({ options, currentOption, onOptionChange, isImageOption, moreLength }) => {
  const [open, setOpen] = useState(false);
  const { s_width, s_height } = useWindowDimensions();

  const displayDropdown = () => {
    return options
      .filter(option => option.value !== currentOption.value)
      .map((option, index) => (
        <div
          key={option.value}
          onClick={() => onOptionChange(option)}
          style={dropdownStyle(index)}
          className={moreLength && styles["reduce-width2"]}
        >
          {isImageOption ? (
            <img src={option.src} alt={option.value} style={{ width: '20px' }} />
          ) : (
            option.value
          )}
        </div> 
      ));
  };

  return (
    <div 
      onClick={() => setOpen(prev => !prev)} 
      className={`${styles.filter} ${moreLength && styles["reduce-width"]}`} 
      style={{
        height: (open && !moreLength) ? `${(options.length - 1) * 45 + 49}px` : (open && moreLength) ? `${(options.length - 1) * 64 + 59}px` : moreLength ? "65px" : undefined,
        width: moreLength && "260px",
        borderRadius: moreLength && "15px",
        marginBottom: !moreLength && "10px",
        color: moreLength && "#f6f6f6",
        position: moreLength && s_width > 1310 ? "absolute" : "relative",
        right: moreLength && "0px",
        top: moreLength && "-14px",
       
      }}
    >
      <div 
        className={`${moreLength && styles["reduce-width2"]}`}
        style={{ height: moreLength && "55px",zIndex: 1, fontSize: moreLength && "16px", width: moreLength && "100%", fontWeight: moreLength && "300", display: "flex", justifyContent: moreLength && "start", paddingLeft: moreLength && "10px", borderRadius: moreLength && "10px", width: moreLength && "250px" }}>
        {isImageOption ? (
          <img src={currentOption.src} alt={currentOption.value} />
        ) : (
          currentOption.value
        )}
      </div>
      {displayDropdown()}
    </div>
  );

  function dropdownStyle (i){
    let open_styling = {
      visibility: "visible", 
      position: "absolute", 
      opacity: 1, 
      marginTop: !moreLength ? `${44 * (i+1)}px` : `${60 * (i+1)}px`,
      width: moreLength && "max-content",
      fontWeight: moreLength && "300",
      fontSize: moreLength && "16px",
      width: moreLength && "250px",
      display: "flex", 
      justifyContent: moreLength && "start",
      paddingLeft: moreLength && "10px",
      borderRadius: moreLength && "10px",
      height: moreLength && "55px",
      
    } 

    let closed_styling = {
      visibility: "hidden", 
      position: "absolute",
      opacity: 0
    }
    
    if (open) return open_styling 
    else return closed_styling
  }

};

export default FilterItem;
