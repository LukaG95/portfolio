import React, { useState } from 'react';
import styles from './Skill.module.scss'; // Assuming you're using CSS modules for styling

const Skill = ({ imageSrc, imageHoverSrc, name, width }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={styles.skill}
    >
      <img
        className={styles.image}
        src={imageSrc}
        style={hover ? { opacity: 0, width: width } : { opacity: 0.5, width: width }}
        alt={name}
      />
      <img
        className={styles.imageHover}
        src={imageHoverSrc}
        style={hover ? { opacity: 1, width: width } : { opacity: 0, width: width }}
        alt={`${name} hover`}
      />
      <div>{name}</div>
    </div>
  );
};

export default Skill;
