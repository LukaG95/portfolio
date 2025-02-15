import { useState, useEffect, useContext } from 'react';
import styles from './ContactSection.module.scss';
import { createNotification } from "../misc/toast";
import { AppContext } from "../context/AppContext";
import { constants } from "../misc/constants";
import FormItem from "../components/FormItem";
import FilterItem from '../components/FilterItem';
import axios from 'axios';

function ContactSection({ websiteOption, setWebsiteOption }) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [budget, setBudget] = useState('');
  const [message, setMessage] = useState('');
  const [formIsValid, setFormIsValid] = useState(false);

  const { language, color } = useContext(AppContext);
  const { website_options, route } = constants();

  useEffect(()=> {
    setFormIsValid(isFormFilled);
  }, [fullName, email, budget, message])

  return (
    <div className={`${styles.four} observed`}>
      <div className={`${styles.content} ${styles.hidden} fade-in-div`}>
        <div id="four"></div>
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
  );
  
  function submitMessage(e){
    e.preventDefault();
    console.log("test")
    axios.post(`${route}/api/message/sendMessage`, { fullName, email, budget, plan: websiteOption, message}, { withCredentials: true }).then(res => {
      if (res.status === 200) {
        createNotification("success", language.form_text5);
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

  function isFormFilled(){
    const isNonEmptyString = (value) => typeof value === 'string' && value.trim().length > 0;

    const isValidFullName = isNonEmptyString(fullName);
    const isValidEmail = isNonEmptyString(email); 
    const isValidBudget = isNonEmptyString(budget);
    const isValidMessage = isNonEmptyString(message);

    return isValidFullName && isValidEmail && isValidBudget && isValidMessage;
  }

  function clearForm(){
    setFullName('');
    setEmail('');
    setBudget('');
    setMessage('');
  }
}

export default ContactSection;