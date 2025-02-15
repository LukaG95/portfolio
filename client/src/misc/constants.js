import PaintRed from '../images/paint red.png';
import PaintGreen from '../images/paint green.png';
import PaintBlue from '../images/paint blue.png';

import ReactLogo from "../images/react.png";
import NodeLogo from "../images/nodejs.png";
import FigmaLogo from "../images/figma.png";
import MongoDBLogo from "../images/mongodb.png";
import HerokuLogo from "../images/heroku.png";
import GithubLogo from "../images/github.png";

export function constants() {
  let route;
  if (process.env.NODE_ENV === "production") route = "https://lukagolob.com";
  else route = "http://localhost:5000";

  const languages = [
    { name: "SLO" },
    { name: "ENG" }
  ];

  languages[0].navi_text1 = "O meni";
  languages[0].navi_text2 = "Moje delo";
  languages[0].navi_text3 = "Cena";
  languages[0].navi_text4 = "Kontakt";
  languages[0].main_text1 = "Živjo, moje ime je";
  languages[0].main_text2 = " in sem";
  languages[0].main_text3 = "razvijalec";
  languages[0].middle_text1 = "Rad izdelujem";
  languages[0].placeholder_text1 = "Spletni oblikovalec";
  languages[0].placeholder_text2 = "in razvijalec";
  languages[0].placeholder_text3 = "Najemi me!";
  languages[0].skills_text1 = "STRANI";
  languages[0].work_text1 = "Preprosta";
  languages[0].work_text2 = "stran";
  languages[0].work_text3 = "Frizerski salon";
  languages[0].work_text4 = "od";
  languages[0].work_text5 = "Spletna";
  languages[0].work_text6 = "aplikacija";
  languages[0].work_text7 = "Sestavi računalnik";
  languages[0].work_text8 = "Spletna stran je v izdelavi";
  languages[0].pricing_text1 = "OSNOVNI";
  languages[0].pricing_text2 = "uro";
  languages[0].pricing_text3 = "NAPREDNI";
  languages[0].pricing_text4 = "Izberi";
  languages[0].pricing_text5 = "Potreben vaš okvirni načrt";
  languages[0].pricing_text6 = "Uporaba kodnih in dizajn šablon";
  languages[0].pricing_text7 = "Ročno izdelan dizajn";
  languages[0].pricing_text8 = "Integrirana baza podatkov in backend";
  languages[0].pricing_text9 = "Višja prioriteta";
  languages[0].pricing_text10 = "24/7 podpora";
  languages[0].pricing_text11 = "Oba plana vključujeta";
  languages[0].pricing_text12 = "dizajn";
  languages[0].pricing_text13 = "Gostovanje se začne pri 5€/mesec na zahtevo";
  languages[0].form_text1 = "Ime in priimek";
  languages[0].form_text2 = "Sporočilo";
  languages[0].form_text3 = "opcijsko: vključite primere spletnih strani";
  languages[0].form_text4 = "Pošlji sporočilo";
  languages[0].form_text5 = "Sporočilo poslano";

  languages[1].navi_text1 = "About me";
  languages[1].navi_text2 = "My work";
  languages[1].navi_text3 = "Pricing";
  languages[1].navi_text4 = "Contact";
  languages[1].main_text1 = "Hello there, my name is";
  languages[1].main_text2 = ", I am a";
  languages[1].main_text3 = "developer";
  languages[1].middle_text1 = "I love creating";
  languages[1].placeholder_text1 = "Web designer";
  languages[1].placeholder_text2 = "and developer";
  languages[1].placeholder_text3 = "Hire me!";
  languages[1].skills_text1 = "WEBSITES";
  languages[1].work_text1 = "Basic";
  languages[1].work_text2 = "website";
  languages[1].work_text3 = "Barbershop";
  languages[1].work_text4 = "from";
  languages[1].work_text5 = "Web";
  languages[1].work_text6 = "app";
  languages[1].work_text7 = "PC part picker";
  languages[1].work_text8 = "Website in the making";
  languages[1].pricing_text1 = "BASIC";
  languages[1].pricing_text2 = "hour";
  languages[1].pricing_text3 = "ENTERPRISE";
  languages[1].pricing_text4 = "Choose";
  languages[1].pricing_text5 = "Require your wireframe";
  languages[1].pricing_text6 = "Using design and code templates";
  languages[1].pricing_text7 = "Handcrafted design";
  languages[1].pricing_text8 = "Integrated database and backend";
  languages[1].pricing_text9 = "High priority";
  languages[1].pricing_text10 = "24/7 support";
  languages[1].pricing_text11 = "Both plans include";
  languages[1].pricing_text12 = "design";
  languages[1].pricing_text13 = "Hosting starts at 5€/month upon request";
  languages[1].form_text1 = "Full name";
  languages[1].form_text2 = "Message";
  languages[1].form_text3 = "optional: include website examples";
  languages[1].form_text4 = "Send message";
  languages[1].form_text5 = "Message sent";

  const colors = [
    { name: "red", src: PaintRed, value: "#BB5858", dark: "#AA4C4C", low: "#322020"},
    { name: "green", src: PaintGreen, value: "#66a549", dark: "#5c9244", low: "#273220"},
    { name: "blue", src: PaintBlue, value: "#4969d4", dark: "#3f5dbd", low: "#202636"},
  ];

  const skills = [{
      logo: ReactLogo,
      name: "ReactJS",
      width: "60px"
    },{
      logo: NodeLogo,
      name: "NodeJS",
      width: "55px"
    },{
      logo: GithubLogo,
      name: "Github",
      width: "55px"
    },{
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

  return { languages, colors, route, skills, words, website_options }
}
