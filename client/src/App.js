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
import { info } from './misc/info.js';

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
  const [showWebsite, setShowWebsite] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const divRef = useRef(null);
  const { s_width, s_height } = useWindowDimensions();
  const { languages, colors } = info();

  const skills = [{
      logo: ReactLogo,
      name: "ReactJS",
      width: "60px"
    },{
      logo: NodeLogo,
      name: "NodeJS",
      width: "55px"
    },
    ,{
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

  const words = ['fast', 'modern', 'beautiful', 'timeless', 'secure', 'dynamic', 'unique', 'edgy'];
  const random_num = Math.floor(Math.random() * (words.length-1)) + 1;
  const [usedWords, setUsedWords] = useState([words[random_num]]);
  const [currentWord, setCurrentWord] = useState(words[random_num]);
  const innerDivRef = useRef(null);

  useEffect(() => {
    function updateWord() {
      let filtered_words = words.filter(word => !usedWords.includes(word))
      
      if (usedWords.length >= words.length) {
        filtered_words = words;
        setUsedWords([]);
      }

      const final_word = filtered_words[Math.floor(Math.random() * filtered_words.length)]; // Pick a random word
      setUsedWords(prev => [...prev, final_word]);
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
  }, [words]);

  const website_options = [
    { value: "Basic" },
    { value: "Enterprise" },
  ];

  const [websiteOption, setWebsiteOption] = useState(website_options[0]);
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
      console.log(scrollPosition)

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

  const { language, setLanguage, selectedColor, setSelectedColor } = useContext(AppContext);

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
              currentOption={selectedColor} 
              onOptionChange={setSelectedColor}
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
              <div>Web designer</div>
              <div>and developer</div>
            </div>
            <img src={Logo}  />
          </div>
          <img className={styles["profile-image"]} src={Profile}  />
          <div className={styles["mail-place"]}>
            <div>glukec4@gmail.com</div>
            <div>Ljubljana, SL</div>
          </div>
          <div className={styles.socials}>
            <div><img src={Discord} style={{width: 13}}></img></div>
            <div><img src={Twitter}></img></div>
            <div><img src={Instagram}></img></div>
            <div><img src={Facebook}></img></div>
          </div>
          <div className={styles["hire-me-button"]} onClick={()=> handleNavItemClick(3, "#four")}>
            Hire me!
          </div>
        </div>
      </div>
      <div className={styles.middle}>
        <div className={styles.one} id="one">
          <div className={styles.content}>
            <div className={styles["navi-text-on-middle"]}>About me</div>
            { s_width <= 1500 ? 
              <>
                <div className={styles["main-text"]}>Hello there, my name is <span>Luka</span>, I'm a <span>full-stack</span> developer</div>
                <div className={styles["middle-text"]}><div>I love creating&nbsp;</div><LetterBoxes /><div>&nbsp;websites</div></div>
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
                <div className={styles["main-text"]}>Hello there, my name is <span>Luka</span>, I'm a <span>full-stack</span> developer</div>
                <div className={styles["new-skills-outer"]}>

                  <div>
                    <div className={styles["random-word"]}>{currentWord.toUpperCase()}</div>
                  </div>
                  
                  <div>
                    <div className={styles["website-text"]}>WEBSITES</div>
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
            <div style={{marginBottom: "50px"}} className={styles["navi-text-on-middle"]}>Work</div>
            <div style={{marginBottom: "70px"}}className={styles["new-work-block"]}>
              <img src={SimpleWebsite}></img>
              <div></div>
              <p className={styles["white-to-black"]}><span style={{color: "#BB5858"}}>Basic</span> website</p>
              <p className={styles["white-to-black"]}>Grow your business</p>
              <p><span style={{color: "#BB5858"}}>from</span> <span className={styles["white-to-black"]}>100€</span></p>
              <div style={{background: "#e0e0e0"}}></div>
            </div>
            <div className={styles["new-work-block"]}>
              <img src={WebApp}></img>
              <div></div>
              <p><span style={{color: "#BB5858"}}>Web</span> app</p>
              <p>PC part picker</p>
              <p><span style={{color: "#BB5858"}}>from</span> 1.500€</p>
              <div></div>
            </div>
          </div>
        </div>
        <div className={`${styles.three} observed`} id="three">
          <div className={`${styles.content} ${styles.hidden} fade-in-div`}>
            <div style={{marginBottom: "35px"}} className={styles["navi-text-on-middle"]}>Pricing</div>
              <div className={`${styles["price-wrapper"]} ${styles.hidden} fade-in-div`}>
                <PriceBlock 
                  title={"BASIC"}
                  price={15}
                  benefits={["Require your wireframe", "Using design and code templates"]}
                />
                <PriceBlock 
                  title={"ENTERPRISE"}
                  price={25}
                  benefits={["Handcrafted design", "Integrated database and backend", "High priority", "24/7 support"]}
                />
              </div>
            <p style={{marginTop: "50px", fontWeight: "370"}}>* All plans include <span style={{color: "#E56A6A"}}>responsive</span> design</p>
            <p style={{marginTop: "10px", fontWeight: "370"}}>* Hosting starts at 5€/month upon request</p>
          </div>  
        </div>
        <div className={`${styles.four} observed`} id="four">
          <div className={`${styles.content} ${styles.hidden} fade-in-div`}>
            <div style={{marginBottom: "80px"}} className={styles["navi-text-on-middle"]}>Contact</div>
            <form className={`${styles.hidden} fade-in-div`}>
              <div>
                <FormItem placeholder={"Full name *"}/>
                <FormItem placeholder={"Email *"}/>
              </div>

              <div>
                <FormItem placeholder={"Budget"}/>
                <FilterItem 
                  options={website_options} 
                  currentOption={websiteOption} 
                  onOptionChange={setWebsiteOption}
                  isImageOption={false}
                  moreLength={true}
                />
              </div>

              <div>
                <FormItem type={"textarea"} placeholder={"Message *"} placeholder2={"optional: include website examples in the message"} />
              </div>

              <button type='Submit' onClick={submitMessage} style={{opacity: !isFormFilled() && 0.5}} disabled={!isFormFilled()}>Send message</button>

            </form>
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <Navbar selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} setShowSidebar={setShowSidebar}/>
      </div>
    </div>
  );
  else return <Loader />;

  function isFormFilled(){
    return false;
  }

  function submitMessage(e){
    console.log("test")
    e.preventDefault();
  }
}

export default App;
