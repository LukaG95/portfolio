import React, { useState, useEffect } from 'react';
import styles from './LetterBoxes.module.scss';

function LetterBoxes() {
  const [letters, setLetters] = useState(Array(9).fill(''));

  const words = ['fast', 'modern', 'beautiful', 'timeless', 'secure', "dynamic", "unique", "edgy"];
  const alphabet = "abcdefghijklmnopqrstuvwyz";
  let used_words = [];

  useEffect(() => {
    const startAnimation = () => {
      let filtered_words = words.filter(word => !used_words.includes(word))
      if (filtered_words.length === 0) {
        filtered_words = words;
        used_words = [];
      }

      const final_word = filtered_words[Math.floor(Math.random() * filtered_words.length)]; // Pick a random word
      used_words.push(final_word);

      // Start the interval to generate random letters
      const intervalId = setInterval(() => {
        setLetters(prevLetters => 
          prevLetters.map(() => alphabet[Math.floor(Math.random() * alphabet.length)])
        );
      }, 10); // Update every second

      // Stop the random letter generation after 5 seconds and show the final word
      const timeoutId = setTimeout(() => {
        clearInterval(intervalId); // Stop random letters after 5 seconds

        const newLetters = Array(9).fill('');
        for (let i = 0; i < final_word.length; i++) {
          newLetters[i] = final_word[i];
        }
        setLetters(newLetters); // Set the final word in the letter boxes

        // Wait for 3 seconds before restarting the process
        setTimeout(() => {
          startAnimation(); // Restart the animation
        }, 3000);
      }, 1500); // After 5 seconds

      return () => {
        clearInterval(intervalId);
        clearTimeout(timeoutId);
      };
    };

    startAnimation(); // Initial start of the animation

  }, []);

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
