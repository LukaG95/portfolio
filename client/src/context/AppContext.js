import React, { createContext, useState } from 'react';
import { info } from '../misc/info.js';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const { languages, colors } = info();
    
    const [color, setColor] = useState(colors[0]);
    const [language, setLanguage] = useState(languages[1]);

    return (
        <AppContext.Provider value={{ language, setLanguage, color, setColor }}>
            {children}
        </AppContext.Provider>
    );
};
