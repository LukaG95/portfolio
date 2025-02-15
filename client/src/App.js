import { useEffect, useState, useContext } from "react";
import { ToastContainer } from "./misc/toast";
import "react-toastify/dist/ReactToastify.css";
import styles from "./App.module.scss";
import Navbar from "./components/Navbar";
import PhoneSidebar from "./components/PhoneSidebar";
import Loader from "./components/Loader";
import LeftSection from "./sections/LeftSection";
import MiddleSection from "./sections/MiddleSection";
import useWindowDimensions from "./WindowDimensions";
import { constants } from "./misc/constants";
import { AppContext } from "./context/AppContext";

function App() {
  const [showWebsite, setShowWebsite] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const { s_width } = useWindowDimensions();
  const { website_options } = constants();

  const { language } = useContext(AppContext);

  const [websiteOption, setWebsiteOption] = useState(website_options[language.name][0]);
  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    setTimeout(()=> {
      setShowWebsite(true);
    }, 0);    
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
    const scrollRanges = [ 
      { width: 445, ranges: [1326, 1938, 3468] },
      { width: 864, ranges: [1224, 2346, 3162] },
      { width: 950, ranges: [1020, 2140, 2958] },
      { width: 1025, ranges: [714, 1420, 2960] },
      { width: 1235, ranges: [610, 1630, 3140] },
      { width: 1360, ranges: [610, 1630, 2650] },
      { width: Infinity, ranges: [400, 1600, 2500] }
    ];
  
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const { ranges } = scrollRanges.find(({ width }) => s_width <= width) || {};
  
      if (ranges) {
        const index = ranges.findIndex(limit => scrollPosition < limit);
        setSelectedIndex(index !== -1 ? index : 3);
      }
    };
  
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [s_width]);
  
  const handleNavItemClick = (index, id) => {
    setSelectedIndex(index);

    const el = document.querySelector(id);

    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    else console.log("no element")
  };

  if (showWebsite) {
    return (
      <div className={styles.app}>
        <LeftSection handleNavItemClick={handleNavItemClick} />
        <MiddleSection 
          showWebsite={showWebsite} 
          websiteOption={websiteOption} 
          setWebsiteOption={setWebsiteOption} 
        />
        <Navbar 
          selectedIndex={selectedIndex} 
          setSelectedIndex={setSelectedIndex} 
          setShowSidebar={setShowSidebar} 
        />
        <PhoneSidebar 
          showSidebar={showSidebar} 
          setShowSidebar={setShowSidebar} 
        />
        <ToastContainer />
      </div>
    );
  } 
  
  return <Loader />;
}

export default App;
