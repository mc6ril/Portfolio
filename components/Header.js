import Link from "next/link";
import { motion } from "framer-motion";
import { traduction } from "../assets/data/lang";
import { Context } from "./context/LangContext";
import { useContext } from "react";

export default function Header() {
  const { lang, toggleLang } = useContext(Context);

  const onHandleSelect = (e) => {
    e.preventDefault();
    if (e.target.value === "Français" || e.target.value === "French") {
      toggleLang("FR");
    } else {
      toggleLang("EN");
    }
  };

  return (
    <header>
      <Link href="/" aria-label="Home Page">
        <a className="name">Cyril Lesot</a>
      </Link>
      <nav>
        <motion.li
          initial={{ y: -200 }}
          animate={{ y: 0 }}
          transition={{ ease: "easeOut", duration: 0.7 }}
        >
          <Link href="/" aria-label="Home Page">
            <a>Home</a>
          </Link>
        </motion.li>
        <motion.li
          initial={{ y: -200 }}
          animate={{ y: 0 }}
          transition={{ ease: "easeOut", duration: 1 }}
        >
          <Link href="/contact" aria-label="Contact Page">
            <a>Contact</a>
          </Link>
        </motion.li>
      </nav>
      <div className="language">
        <select id="language" onChange={onHandleSelect}>
          {traduction[lang].header.language.map((list, i) => {
            return <option key={i}>{list}</option>;
          })}
        </select>
      </div>
    </header>
  );
}
