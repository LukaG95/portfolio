import { useState } from 'react';
import styles from './FormItem.module.scss';

function FormItem({ placeholder, tip="text", placeholder2, req, inputValue, setInputValue }) {
  const [selected, setSelected] = useState(false);

  const handleFocus = () => {
    setSelected(true);
  };

  const handleBlur = () => {
    setSelected(false);
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className={styles["form-item"]} style={{width: tip !== "text" && tip !== "email" && "100%"}}>
      { tip === "text" || tip === "email" ? 
        <>
          <label htmlFor={placeholder} style={selected || inputValue.trim() !== '' ? {bottom: "35px", left: "0px", fontSize: "12px"} : {}}>{placeholder}</label>
          <input 
            type={tip}
            id={placeholder}
            name={placeholder}
            value={inputValue}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={handleChange}
            style={{ borderBottom: selected && "1px solid lightblue"}}
            required={req}
          />
        </>
        : 
        <>
          <label htmlFor={placeholder} style={selected || inputValue.trim() !== '' ? {top: "-25px", left: "25px", fontSize: "12px"} : {top: "25px", left: "25px"}}>{placeholder}</label>
          <label htmlFor={placeholder} style={selected || inputValue.trim() !== '' ? {display: "none"} : {top: "55px", left: "25px", paddingRight: "20px"}}>{placeholder2}</label>
          <textarea
            id={placeholder}
            name={placeholder}
            value={inputValue}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={handleChange}
            style={selected ? {border: "1px solid lightblue"} : {}}
          />
        </>
      }
    </div>
  );
}

export default FormItem;