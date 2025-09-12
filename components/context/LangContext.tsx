import React, { createContext, useState } from "react";

export type SupportedLang = "FR" | "EN";

export interface LangContextValue {
    lang: SupportedLang;
    toggleLang: (changeLang: SupportedLang) => void;
}

export const Context = createContext<LangContextValue>({} as LangContextValue);

interface ContextProviderProps {
    children: React.ReactNode;
}

const ContextProvider: React.FC<ContextProviderProps> = (props) => {
    const [lang, setLang] = useState<SupportedLang>("FR");

    const toggleLang = (changeLang: SupportedLang) => {
        setLang(changeLang);
    };

    return <Context.Provider value={{ lang, toggleLang }}>{props.children}</Context.Provider>;
};

export default ContextProvider;
