import styles from './App.module.scss';
import { useEffect, useState, useRef, useContext } from 'react';
import Loader from './components/Loader.js';
import Profile from './images/profile.png'; 
import Logo from './images/logo.png'; 
import LetterBoxes from './components/LetterBoxes.js'
import Skill from './components/Skill.js';
import PriceBlock from './components/PriceBlock.js';
import FormItem from './components/FormItem.js';
import Navbar from './components/Navbar.js';
import FilterItem from './components/FilterItem.js';
import useWindowDimensions from './WindowDimensions.js';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, createNotification } from "./misc/toast";
import { info } from './misc/info.js';
import axios from 'axios';

import ReactLogo from './images/react.png'; 
import ReactRedLogo from './images/react red.png'; 

import NodeLogo from './images/nodejs.png'; 
import NodeRedLogo from './images/nodejs red.png';

import FigmaLogo from './images/figma.png'; 
import FigmaRedLogo from './images/figma red.png';

import MongoDBLogo from './images/mongodb.png'; 
import MongoDBRedLogo from './images/mongodb red.png';

import HerokuLogo from './images/heroku.png'; 
import HerokuRedLogo from './images/heroku red.png';

import GithubLogo from './images/github.png'; 
import GithubRedLogo from './images/github red.png';

import Discord from './images/discord.png'; 
import Twitter from './images/twitter.png'; 
import Instagram from './images/instagram.png'; 
import Facebook from './images/facebook.png'; 

import SimpleWebsite from './images/simple website.png'; 
import AdvancedWebsite from './images/advanced website.png';
import WebApp from './images/web app.png'; 
import { AppContext } from './context/AppContext';

function App() {
  const [showWebsite, setShowWebsite] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [budget, setBudget] = useState('');
  const [message, setMessage] = useState('');
  const [formIsValid, setFormIsValid] = useState(false);

  useEffect(()=> {
    setFormIsValid(isFormFilled);
  }, [fullName, email, budget, message])

  const divRef = useRef(null);
  const { s_width, s_height } = useWindowDimensions();
  const { languages, colors, route } = info();

  const { language, setLanguage, color, setColor } = useContext(AppContext);

  const skills = [{
      logo: ReactLogo,
      name: "ReactJS",
      width: "60px"
    },
    {
      logo: NodeLogo,
      name: "NodeJS",
      width: "55px"
    },
    {
      logo: GithubLogo,
      name: "Github",
      width: "55px"
    },
    {
      logo: MongoDBLogo,
      name: "MongoDB",
      width: "48px",
      padding: "5px",
      margin: "8px"
    },{
      logo: HerokuLogo,
      name: "Heroku",
      width: "46px",
      padding: "5px",
      margin: "5px"
    }, {
      logo: FigmaLogo,
      name: "Figma",
      width: "38px",
      padding: "10px",
      margin: "9px"
    }
  ]

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
      SLO: "univerzalne"
    },
    {
      ENG: "edgy",
      SLO: "drzne"
    }
  ]

  const randomIndex = Math.floor(Math.random() * words.length);
  let usedIndexes = [randomIndex];
  const [currentWord, setCurrentWord] = useState(words[randomIndex][language.name]);

  const innerDivRef = useRef(null);

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
  }, [language]);

  const website_options = {
    SLO: [
      { name: "Osnovni" },
      { name: "Napredni" }
    ],
    ENG: [
      { name: "Basic" },
      { name: "Enterprise" }
    ]
  }

  const [websiteOption, setWebsiteOption] = useState(website_options[language.name][0]);
  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    setTimeout(()=> {
      setShowWebsite(true);
      
    }, 2500);    
  }, [])

  useEffect(() => {
    if (showSidebar) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [showSidebar]);

  useEffect(() => {
    setWebsiteOption(website_options[language.name][0])
  }, [language])

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
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      //console.log(scrollPosition)

      if (s_width <= 1130){
        if (scrollPosition < 1530) {
          setSelectedIndex(0);
        } else if (scrollPosition >= 1530 && scrollPosition < 2700) {
          setSelectedIndex(1);
        } else if (scrollPosition >= 2700 && scrollPosition < 4400) {
          setSelectedIndex(2);
        } else {
          setSelectedIndex(3);
        }
      }

      else {
        if (scrollPosition < 400) {
          setSelectedIndex(0);
        } else if (scrollPosition >= 400 && scrollPosition < 1600) {
          setSelectedIndex(1);
        } else if (scrollPosition >= 1600 && scrollPosition < 2500) {
          setSelectedIndex(2);
        } else {
          setSelectedIndex(3);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavItemClick = (index, id) => {
    setSelectedIndex(index);

    const el = document.querySelector(id);

    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    else console.log("no element")
  };

  if (showWebsite)
  return (
    <div className={styles.app}>
      <div className={`${styles["sidebar-wrapper"]} ${showSidebar && styles.open}`}>

        <div className={styles.sidebar}>

          <div className={styles["close-sidebar-wrapper"]}>
            <div className={styles["close-sidebar-button"]} onClick={() => setShowSidebar(false)}>
              <div></div>
              <div></div>
            </div>
          </div>

          <div className={styles["sidebar-filters-wrapper"]}>

            <FilterItem 
              options={languages} 
              currentOption={language} 
              onOptionChange={setLanguage}
              isImageOption={false}
            />

            <FilterItem 
              options={colors} 
              currentOption={color} 
              onOptionChange={setColor}
              isImageOption={true}
            />

          </div>
           
        </div>
      </div>
     {/*  <div className={styles.dimensions}>{s_width}</div>
      <div className={styles.dimensions} style={{top: "40px"}}>{s_height}</div> */}
      <div className={styles.left}>
        <div className={styles.placeholder}>
          <div className={styles.top}>
            <div>Luka</div>
            <div>
              <div>{language.placeholder_text1}</div>
              <div>{language.placeholder_text2}</div>
            </div>
            <img src={Logo}  />
          </div>
          <img className={styles["profile-image"]} src={Profile}  />
          <div className={styles["mail-place"]}>
            <div>glukec4@gmail.com</div>
            <div>Ljubljana, SL</div>
          </div>
          <div className={styles.socials}>
            <div className={styles[`hover-border-${color.name}`]}><img src={Discord} style={{width: 13}}></img></div>
            <div className={styles[`hover-border-${color.name}`]}><img src={Twitter}></img></div>
            <div className={styles[`hover-border-${color.name}`]}><img src={Instagram}></img></div>
            <div className={styles[`hover-border-${color.name}`]}><img src={Facebook}></img></div>
          </div>
          <div className={`${styles["hire-me-button"]}`} style={{background: color.value, borderBottomColor: color.dark}} onClick={()=> handleNavItemClick(3, "#four")}>
            {language.placeholder_text3}
          </div>
        </div>
      </div>
      <div className={styles.middle}>
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
                    /* width={s_width <= 1680 && s_width > 1130 ? "40px" : "60px"} */
                    width={"60px"}
                  />
                  <Skill
                    imageSrc={NodeLogo}
                    imageHoverSrc={NodeRedLogo}
                    name="NodeJS"
                    /* width={s_width <= 1680 && s_width > 1130 ? "34px" : "50px"} */
                    width={"50px"}
                  />
                  <Skill
                    imageSrc={FigmaLogo}
                    imageHoverSrc={FigmaRedLogo}
                    name="Figma"
                    /* width={s_width <= 1680 && s_width > 1130 ? "25px" : "40px"} */
                    width={"40px"}
                  />
                  <Skill
                    imageSrc={MongoDBLogo}
                    imageHoverSrc={MongoDBRedLogo}
                    name="MongoDB"
                    /* width={s_width <= 1680 && s_width > 1130 ? "30px" : "47px"} */
                    width={"47px"}
                  />
                  <Skill
                    imageSrc={HerokuLogo}
                    imageHoverSrc={HerokuRedLogo}
                    name="Heroku"
                    /* width={s_width <= 1680 && s_width > 1130 ? "35px" : "51px"} */
                    width={"51px"}
                  />
                  <Skill
                    imageSrc={GithubLogo}
                    imageHoverSrc={GithubRedLogo}
                    name="Github"
                    /* width={s_width <= 1680 && s_width > 1130 ? "40px" : "56px"} */
                    width={"56px"}
                  />
                </div>
              </> : 
              <>
                <div className={styles["main-text"]}>{language.main_text1} <span style={{color: color.value}}>Luka</span>{language.main_text2} <span style={{color: color.value}}>full-stack</span> {language.main_text3}</div>
                <div className={styles["new-skills-outer"]}>

                  <div>
                    <div className={styles["random-word"]}>{currentWord.toUpperCase()}</div>
                  </div>
                  
                  <div>
                    <div className={styles["website-text"]}>{language.skills_text1}</div>
                  </div>
                  
                  <div ref={innerDivRef} className={styles["new-skills-inner"]}>
                
                    {
                      skills.map(skill => 
                        <div className={styles["new-skill"]} style={{paddingLeft: skill.padding}}>
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
        <div className={`${styles.two} observed`} ref={divRef} id="two">
          <div className={`${styles.content} ${styles.hidden} fade-in-div`}>
            <div style={{marginBottom: "50px"}} className={styles["navi-text-on-middle"]}>{language.navi_text2}</div>
            <div style={{marginBottom: "70px"}}className={styles["new-work-block"]}>
              <img src={SimpleWebsite}></img>
              <div></div>
              <p className={styles["white-to-black"]}><span style={{color: color.value}}>{language.work_text1}</span> {language.work_text2}</p>
              <p className={styles["white-to-black"]}>{language.work_text3}</p>
              <p><span style={{color: color.value}}>{language.work_text4}</span> <span className={styles["white-to-black"]}>100€</span></p>
              <div style={{background: "#e0e0e0"}}></div>
            </div>
            <div className={styles["new-work-block"]}>
              <img src={WebApp}></img>
              <div></div>
              <p><span style={{color: color.value}}>{language.work_text5}</span> {language.work_text6}</p>
              <p>{language.work_text7}</p>
              <p><span style={{color: color.value}}>{language.work_text4}</span> 1.500€</p>
              <div></div>
            </div>
          </div>
        </div>
        <div className={`${styles.three} observed`} id="three">
          <div className={`${styles.content} ${styles.hidden} fade-in-div`}>
            <div style={{marginBottom: "35px"}} className={styles["navi-text-on-middle"]}>{language.navi_text3}</div>
              <div className={`${styles["price-wrapper"]} ${styles.hidden} fade-in-div`}>
                <PriceBlock 
                  title={language.pricing_text1}
                  price={15}
                  benefits={[language.pricing_text5, language.pricing_text6]}
                  chooseOption={() => setWebsiteOption(website_options[language.name][0])}
                />
                <PriceBlock 
                  title={language.pricing_text3}
                  price={25}
                  background={true}
                  benefits={[language.pricing_text7, language.pricing_text8, language.pricing_text9, language.pricing_text10]}
                  chooseOption={() => setWebsiteOption(website_options[language.name][1])}
                />
              </div>
            <p style={{marginTop: "50px", fontWeight: "370"}}>* {language.pricing_text11} <span style={{color: color.value, filter: "brightness(1.5)"}}>responsive</span> {language.pricing_text12}</p>
            <p style={{marginTop: "10px", fontWeight: "370"}}>* {language.pricing_text13}</p>
          </div>  
        </div>
        <div className={`${styles.four} observed`} id="four">
          <div className={`${styles.content} ${styles.hidden} fade-in-div`}>
            <div style={{marginBottom: "80px"}} className={styles["navi-text-on-middle"]}>{language.navi_text4}</div>
            <form className={`${styles.hidden} fade-in-div`}>
              <div>
                <FormItem placeholder={`${language.form_text1} *`} inputValue={fullName} setInputValue={setFullName} req={true}/>
                <FormItem tip={"email"} placeholder={"Email *"} inputValue={email} setInputValue={setEmail} req={true}/>
              </div>

              <div>
                <FormItem placeholder={"Budget"} inputValue={budget} setInputValue={setBudget} req={false}/>
                <FilterItem 
                  options={website_options[language.name]} 
                  currentOption={websiteOption} 
                  onOptionChange={setWebsiteOption}
                  isImageOption={false}
                  moreLength={true}
                />
              </div>

              <div>
                <FormItem tip={"textarea"} placeholder={`${language.form_text2} *`} placeholder2={language.form_text3} inputValue={message} setInputValue={setMessage} req={true}/>
              </div>

              <button type='submit' onClick={submitMessage} style={{opacity: !formIsValid && 0.5, background: color.value, borderBottomColor: color.dark}} disabled={!formIsValid}>{language.form_text4}</button>

            </form>
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <Navbar selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} setShowSidebar={setShowSidebar}/>
      </div>
      <ToastContainer />
    </div>
  );
  else return <Loader />;

  function isFormFilled(){
    const isNonEmptyString = (value) => typeof value === 'string' && value.trim().length > 0;

    const isValidFullName = isNonEmptyString(fullName);
    const isValidEmail = isNonEmptyString(email); 
    const isValidBudget = isNonEmptyString(budget);
    const isValidMessage = isNonEmptyString(message);

    return isValidFullName && isValidEmail && isValidBudget && isValidMessage;
  }

  function submitMessage(e){
    e.preventDefault();

    console.log(route)

    axios.post(`${route}/api/message/sendMessage`, { fullName, email, budget, plan: websiteOption, message}, { withCredentials: true }).then(res => {
      if (res.status === 200) {
        createNotification("success", "Message sent");
        clearForm();
      } else {
        createNotification("error", "Something went wrong");
      }
    }).catch(e => {
      try {
        createNotification("error", e.response.data.message);
      } catch(e){
        createNotification("error", "Something went wrong");
      }

    })
  }

  function clearForm(){
    setFullName('');
    setEmail('');
    setBudget('');
    setMessage('');
  }
}

export default App;
