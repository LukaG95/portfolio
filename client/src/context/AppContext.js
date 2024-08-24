import React, { createContext, useState } from 'react';
import { info } from '../misc/info.js';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const { languages, colors } = info();
    
    const [selectedColor, setSelectedColor] = useState(colors[0]);
    const [language, setLanguage] = useState(languages[1]);

    return (
        <AppContext.Provider value={{ language, setLanguage, selectedColor, setSelectedColor }}>
            {children}
        </AppContext.Provider>
    );
};
