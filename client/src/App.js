import styles from './App.module.scss';
import { useEffect, useState, useRef } from 'react';
import Loader from './components/Loader.js';
import Profile from './images/profile.png'; 
import Logo from './images/logo.png'; 
import LetterBoxes from './components/LetterBoxes.js'
import Skill from './components/Skill.js';
import PriceBlock from './components/PriceBlock.js';
import FormItem from './components/FormItem.js';
import Navbar from './components/Navbar.js';
import FilterItem from './components/FilterItem.js';

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

function App() {
  const [showWebsite, setShowWebsite] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const divRef = useRef(null);

  const website_options = [
    { value: "Simple website" },
    { value: "Advanced website" },
    { value: "Web app" },
  ];

  const [websiteOption, setWebsiteOption] = useState(website_options[0]);

  useEffect(() => {
    setTimeout(()=> {
      setShowWebsite(true);
      
    }, 2500);    
  }, [])

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

      if (scrollPosition < 500) {
        setSelectedIndex(0);
      } else if (scrollPosition >= 500 && scrollPosition < 1800) {
        setSelectedIndex(1);
      } else if (scrollPosition >= 1800 && scrollPosition < 2600) {
        setSelectedIndex(2);
      } else {
        setSelectedIndex(3);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on component unmount
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
          <div className={styles["middle-text"]}>I love creating&nbsp;<LetterBoxes />&nbsp;websites</div>
          <div className={styles["skills-wrapper"]}>
            <Skill
              imageSrc={ReactLogo}
              imageHoverSrc={ReactRedLogo}
              name="ReactJS"
              width="60px"
            />
            <Skill
              imageSrc={NodeLogo}
              imageHoverSrc={NodeRedLogo}
              name="NodeJS"
              width="50px"
            />
            <Skill
              imageSrc={FigmaLogo}
              imageHoverSrc={FigmaRedLogo}
              name="Figma"
              width="40px"
            />
            <Skill
              imageSrc={MongoDBLogo}
              imageHoverSrc={MongoDBRedLogo}
              name="MongoDB"
              width="47px"
            />
            <Skill
              imageSrc={HerokuLogo}
              imageHoverSrc={HerokuRedLogo}
              name="Heroku"
              width="51px"
            />
            <Skill
              imageSrc={GithubLogo}
              imageHoverSrc={GithubRedLogo}
              name="Github"
              width="56px"
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
          <div className={`${styles.hidden} fade-in-div`}>
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
        <Navbar selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex}/>
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
