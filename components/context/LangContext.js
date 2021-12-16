import { createContext, useState } from "react";

export const Context = createContext();

const ContextProvider = (props) => {
  const [lang, setLang] = useState("FR");

  const toggleLang = (changeLang) => {
    setLang(changeLang);
  };

  return <Context.Provider value={{ lang, toggleLang }}>{props.children}</Context.Provider>;
};

export default ContextProvider;
