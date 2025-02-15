import React, { createContext, useState } from 'react';
import { constants } from '../misc/constants.js';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const { languages, colors } = constants();
  
  const [color, setColor] = useState(colors[0]);
  const [language, setLanguage] = useState(languages[1]);

  return (
    <AppContext.Provider value={{ language, setLanguage, color, setColor }}>
      {children}
    </AppContext.Provider>
    );
};
