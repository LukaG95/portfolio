import { useState, useEffect, useRef, useContext } from 'react';
import styles from './MiddleSection.module.scss'
import { constants } from "../misc/constants";
import { AppContext } from "../context/AppContext";
import HeroSection from './HeroSection';
import MyWorkSection from './MyWorkSection';
import PricingSection from './PricingSection';
import ContactSection from './ContactSection';

function MiddleSection({ showWebsite, websiteOption, setWebsiteOption }) {
  const [currentWord, setCurrentWord] = useState("");

  const innerDivRef = useRef(null);
  const { words } = constants();
  const { language } = useContext(AppContext);

  const randomIndex = Math.floor(Math.random() * words.length);
  let usedIndexes = [randomIndex];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Find the .fade-in-div elements inside the observed .content element
            const fadeInDivs = entry.target.querySelectorAll('.fade-in-div');
            fadeInDivs.forEach(fadeInDiv => {
              fadeInDiv.classList.add(styles.visible);
              fadeInDiv.classList.remove(styles.hidden);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.23 } 
    );
  
    // Observe all elements with class .content
    const elements = document.querySelectorAll('.observed');
  
    elements.forEach(div => {
      observer.observe(div);
    });
  
    return () => {
      elements.forEach(div => {
        observer.unobserve(div);
      });
    };
  }, [showWebsite]);
  
  useEffect(() => {
    function updateWord() {    
      let availableIndexes = Array.from({ length: words.length }, (_, i) => i);
      availableIndexes = availableIndexes.filter(i => !usedIndexes.includes(i));

      const randomIndex = Math.floor(Math.random() * availableIndexes.length);
      const chosenIndex = availableIndexes[randomIndex];
    
      const final_word = words[chosenIndex][language.name];
      usedIndexes.push(chosenIndex);

      if (usedIndexes.length >= words.length) usedIndexes = [];
      
      setCurrentWord(final_word);
    }

    function handleAnimationIteration() {
      updateWord();
    }

    const innerDiv = innerDivRef.current;
    if (innerDiv) {
      innerDiv.addEventListener('animationiteration', handleAnimationIteration);

      return () => {
        innerDiv.removeEventListener('animationiteration', handleAnimationIteration);
      };
    }
  }, [language, showWebsite]);

  return (
    <div className={styles.middle}>
      <HeroSection innerDivRef={ innerDivRef } currentWord={ currentWord } />
      <MyWorkSection />
      <PricingSection setWebsiteOption={ setWebsiteOption }/>
      <ContactSection websiteOption={ websiteOption } setWebsiteOption={ setWebsiteOption } />
    </div>
  );
}

export default MiddleSection;