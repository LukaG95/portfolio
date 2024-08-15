import React, { useState } from 'react';
import styles from './NavItem.module.scss'; 

const NavItem = ({ imageSrc, width, isSelected, onClick }) => {
  const selectedStyle = {
    background: "#BB5858"
  };

  return (
    <div
      onClick={onClick}
      className={styles["navi-background"]}
      style={isSelected ? selectedStyle : {}}
    >
      <img
        src={imageSrc}
        style={isSelected ? { filter: "invert(85%)", width } : { width }}
        alt="nav item"
      />
    </div>
  );
};

export default NavItem;
