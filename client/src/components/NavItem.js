import React, { useContext } from 'react';
import styles from './NavItem.module.scss';
import { AppContext } from '../context/AppContext';

const NavItem = ({ imageSrc, width, isSelected, onClick }) => {
  const { color } = useContext(AppContext);

  const selectedStyle = {
    background: color.value,
    border: "none"
  };

  return (
    <div
      onClick={onClick}
      className={styles["navi-background"]}
      style={isSelected ? selectedStyle : {}}
    >
      <img
        src={imageSrc}
        style={isSelected ? { filter: "invert(92%)", width } : { width }}
        alt="nav item"
      />
    </div>
  );
};

export default NavItem;
