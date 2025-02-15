import React from 'react';
import styles from './Loader.module.scss';

function Loader({  }) {

  return (
    <div className={styles.Loader}>
      <div className={styles["middle-wrapper"]}>
        <div className={styles["puzzle-cube"]} ><div></div><div></div></div>
        <div className={styles["puzzle-cube"]} ><div></div><div></div></div>
        <div className={styles["puzzle-cube"]} ><div></div><div></div></div>
        <div className={styles["puzzle-cube"]} ><div></div><div></div></div>
      </div>

      <div className={styles["loading-bar"]}></div>
    </div>
  );
}

export default Loader;