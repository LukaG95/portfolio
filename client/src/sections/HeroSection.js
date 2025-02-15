import { useContext, useRef } from 'react';
import Skill from '../components/Skill';
import styles from './HeroSection.module.scss'

import useWindowDimensions from "../WindowDimensions";
import { AppContext } from "../context/AppContext";
import GithubRedLogo from "../images/github red.png";
import HerokuRedLogo from "../images/heroku red.png";
import ReactLogo from "../images/react.png";
import NodeLogo from "../images/nodejs.png";
import FigmaLogo from "../images/figma.png";
import MongoDBLogo from "../images/mongodb.png";
import HerokuLogo from "../images/heroku.png";
import GithubLogo from "../images/github.png";
import ReactRedLogo from "../images/react red.png";
import FigmaRedLogo from "../images/figma red.png";
import NodeRedLogo from "../images/nodejs red.png";
import MongoDBRedLogo from "../images/mongodb red.png";
import LetterBoxes from "../components/LetterBoxes";
import { constants } from "../misc/constants";

function HeroSection({ innerDivRef, currentWord }) {

  const { s_width } = useWindowDimensions();
  const { language, color } = useContext(AppContext);
  const { skills } = constants();
  
  return (
    <div className={styles.one} id="one">
      <div className={styles.content}>
        <div className={styles["navi-text-on-middle"]}>{language.navi_text1}</div>
        { s_width <= 1500 ? 
          <>
            <div className={styles["main-text"]}>{language.main_text1} <span style={{color: color.value}}>Luka</span>{language.main_text2} <span style={{color: color.value}}>full-stack</span> {language.main_text3}</div>
            <div className={styles["middle-text"]}><div>{language.middle_text1}&nbsp;</div><LetterBoxes language={language}/><div>&nbsp;{language.skills_text1.toLowerCase()}</div></div>
            <div className={styles["skills-wrapper"]}>
              <Skill
                imageSrc={ReactLogo}
                imageHoverSrc={ReactRedLogo}
                name="ReactJS"
                width={"60px"}
              />
              <Skill
                imageSrc={NodeLogo}
                imageHoverSrc={NodeRedLogo}
                name="NodeJS"
                width={"50px"}
              />
              <Skill
                imageSrc={FigmaLogo}
                imageHoverSrc={FigmaRedLogo}
                name="Figma"
                width={"40px"}
              />
              <Skill
                imageSrc={MongoDBLogo}
                imageHoverSrc={MongoDBRedLogo}
                name="MongoDB"
                width={"47px"}
              />
              <Skill
                imageSrc={HerokuLogo}
                imageHoverSrc={HerokuRedLogo}
                name="Heroku"
                width={"51px"}
              />
              <Skill
                imageSrc={GithubLogo}
                imageHoverSrc={GithubRedLogo}
                name="Github"
                width={"56px"}
              />
            </div>
          </> : 
          <>
            <div className={styles["main-text"]}>{language.main_text1} <span style={{color: color.value}}>Luka</span>{language.main_text2} <span style={{color: color.value}}>full-stack</span> {language.main_text3}</div>
            <div className={styles["new-skills-outer"]} style={{boxShadow: `0px 0px 8px ${color.value}33`}}>
              <div> <div className={styles["random-word"]}>{currentWord.toUpperCase()}</div> </div>
              <div> <div className={styles["website-text"]}>{language.skills_text1}</div> </div>
              <div ref={innerDivRef} className={styles["new-skills-inner"]}>
                {
                  skills.map(skill => 
                    <div className={styles["new-skill"]} style={{paddingLeft: skill.padding}} key={skill.name}>
                      <img src={skill.logo} alt={skill.name} style={{width: skill.width}}/>
                      <div style={{marginLeft: skill.margin}}>{skill.name}</div>
                    </div>
                  )
                }
              </div>
            </div>
          </>
        }
      </div>
    </div>
  );
}

export default HeroSection;