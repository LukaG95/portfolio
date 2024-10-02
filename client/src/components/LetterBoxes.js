import React, { useState, useEffect } from 'react';
import styles from './LetterBoxes.module.scss';

function LetterBoxes({ language }) {
  const [letters, setLetters] = useState(Array(10).fill(''));

  const words = [
    {
      ENG: "fast",
      SLO: "hitre"
    },
    {
      ENG: "modern",
      SLO: "moderne"
    },
    {
      ENG: "beautiful",
      SLO: "privlačne"
    },
    {
      ENG: "timeless",
      SLO: "večne"
    },
    {
      ENG: "secure",
      SLO: "varne"
    },
    {
      ENG: "dynamic",
      SLO: "dinamične"
    },
    {
      ENG: "unique",
      SLO: "edinstvene"
    },
    {
      ENG: "edgy",
      SLO: "drzne"
    }
  ]


  const alphabet = "abcdefghijklmnopqrstuvwyz";
  let usedIndexes = [];

  useEffect(() => {
    let intervalId;
    let timeoutId;
  
    const startAnimation = () => {
      let availableIndexes = Array.from({ length: words.length }, (_, i) => i);
      availableIndexes = availableIndexes.filter(i => !usedIndexes.includes(i));
  
      const randomIndex = Math.floor(Math.random() * availableIndexes.length);
      const chosenIndex = availableIndexes[randomIndex];

      usedIndexes.push(chosenIndex);
      if (usedIndexes.length >= words.length) usedIndexes = [];

      const final_word = words[chosenIndex][language.name];
      
  
      // Start the interval to generate random letters
      intervalId = setInterval(() => {
        setLetters(prevLetters => 
          prevLetters.map(() => alphabet[Math.floor(Math.random() * alphabet.length)])
        );
      }, 10); // Update very quickly (every 10ms)
  
      // Stop the random letter generation after 1.5 seconds and show the final word
      timeoutId = setTimeout(() => {
        clearInterval(intervalId); // Stop random letters after 1.5 seconds
  
        const newLetters = Array(10).fill('');
        for (let i = 0; i < final_word.length; i++) {
          newLetters[i] = final_word[i];
        }
        setLetters(newLetters); // Set the final word in the letter boxes
  
        // Wait for 3 seconds before restarting the process
        timeoutId = setTimeout(() => {
          startAnimation(); // Restart the animation
        }, 3000);
      }, 1500); // After 1.5 seconds
    };
  
    startAnimation(); // Initial start of the animation
  
    return () => {
      // Cleanup both interval and timeout on language change or unmount
      clearInterval(intervalId);
      clearTimeout(timeoutId);
    };
  }, [language]);
  

  return (
    <div className={styles["letterbox-wrapper"]}>
      {letters.map((letter, index) => (
        <div key={index} className={styles.letterBox}>
          <div>{letter}</div>
          <div></div>
        </div>
      ))}
    </div>
  );
}

export default LetterBoxes;
