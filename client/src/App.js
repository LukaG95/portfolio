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
  const [showWebsite, setShowWebsite] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const divRef = useRef(null);
  const { s_width, s_height } = useWindowDimensions();
  const { languages, colors } = info();

  const website_options = [
    { value: "Simple website" },
    { value: "Advanced website" },
    { value: "Web app" },
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
            entry.target.classList.add(styles.visible);
            entry.target.classList.remove(styles.hidden);
            observer.unobserve(entry.target); 
          }
        });
      },
      { threshold: 0.01 } 
    );

    const elements = document.querySelectorAll('.fade-in-div'); 

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

      if (s_width <= 1130){
        if (scrollPosition < 1530) {
          setSelectedIndex(0);
        } else if (scrollPosition >= 1530 && scrollPosition < 2700) {
          setSelectedIndex(1);
        } else if (scrollPosition >= 2700 && scrollPosition < 4950) {
          setSelectedIndex(2);
        } else {
          setSelectedIndex(3);
        }
      }

      else {
        if (scrollPosition < 500) {
          setSelectedIndex(0);
        } else if (scrollPosition >= 500 && scrollPosition < 1800) {
          setSelectedIndex(1);
        } else if (scrollPosition >= 1800 && scrollPosition < 2600) {
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
      {/* <div className={styles.dimensions}>{s_width}</div>
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
          <div className={styles["main-text"]}>Hello there, my name is <span>Luka</span> I'm a <span>full-stack</span> developer</div>
          <div className={styles["middle-text"]}><div>I love creating&nbsp;</div><LetterBoxes /><div>&nbsp;websites</div></div>
          <div className={styles["skills-wrapper"]}>
            <Skill
              imageSrc={ReactLogo}
              imageHoverSrc={ReactRedLogo}
              name="ReactJS"
              width={s_width <= 1680 && s_width > 1130 ? "40px" : "60px"}
            />
            <Skill
              imageSrc={NodeLogo}
              imageHoverSrc={NodeRedLogo}
              name="NodeJS"
              width={s_width <= 1680 && s_width > 1130 ? "34px" : "50px"}
            />
            <Skill
              imageSrc={FigmaLogo}
              imageHoverSrc={FigmaRedLogo}
              name="Figma"
              width={s_width <= 1680 && s_width > 1130 ? "25px" : "40px"}
            />
            <Skill
              imageSrc={MongoDBLogo}
              imageHoverSrc={MongoDBRedLogo}
              name="MongoDB"
              width={s_width <= 1680 && s_width > 1130 ? "30px" : "47px"}
            />
            <Skill
              imageSrc={HerokuLogo}
              imageHoverSrc={HerokuRedLogo}
              name="Heroku"
              width={s_width <= 1680 && s_width > 1130 ? "35px" : "51px"}
            />
            <Skill
              imageSrc={GithubLogo}
              imageHoverSrc={GithubRedLogo}
              name="Github"
              width={s_width <= 1680 && s_width > 1130 ? "40px" : "56px"}
            />
          </div>
        </div>
        <div className={styles.two} ref={divRef} id="two">
          <div className={`${styles["work-wrapper"]} ${styles.hidden} fade-in-div`}>
            <div className={styles["work-block"]}>
              <div className={styles["work_upper"]}>
                <div>
                  <p>Simple website</p>
                  <p>Save on flight tickets</p>
                </div>
                <button>Preview</button>
              </div>
              <img src={SimpleWebsite}></img>
            </div>
            <div className={styles["work-block"]}>
            <div className={styles["work_upper"]}>
                <div>
                  <p>Advanced website</p>
                  <p>Designer portfolio</p>
                </div>
                <button>Preview</button>
              </div>
              <img src={AdvancedWebsite}></img>
            </div>
            <div className={styles["work-block"]}>
            <div className={styles["work_upper"]}>
                <div>
                  <p>Web app</p>
                  <p>PC part picker</p>
                </div>
                <button>Preview</button>
              </div>
              <img src={WebApp}></img>
            </div>
          </div>
        </div>
        <div className={styles.three} id="three">
          <div className={`${styles["price-wrapper"]} ${styles.hidden} fade-in-div`}>
            <PriceBlock 
              title={"SIMPLE WEBSITE"}
              price={100}
              benefits={["1 design example", "Up to 3 pages", "Standard static pages"]}
            />
            <PriceBlock 
              title={"ADVANCED WEBSITE"}
              price={500}
              benefits={["3 design examples", "Up to 5 pages", "Custom pages"]}
            />
            <PriceBlock 
              title={"WEB APP"}
              price={1500}
              benefits={["Unlimited design examples", "Unlimited pages", "Custom functionality"]}
            />
          </div>
        </div>
        <div className={styles.four} id="four">
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
