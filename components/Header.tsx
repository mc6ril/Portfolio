import Link from "next/link";
import { motion } from "motion/react";
import { traduction } from "../assets/data/lang";
import { Context } from "./context/LangContext";
import React, { useContext } from "react";

export default function Header(): React.JSX.Element {
    const { lang, toggleLang } = useContext(Context);

    const onHandleSelect: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
        e.preventDefault();
        if (e.target.value === "🇫🇷") {
            toggleLang("FR");
        } else {
            toggleLang("EN");
        }
    };

    return (
        <header>
            <Link href="/" aria-label="Home Page" className="name">
                Cyril Lesot
            </Link>
            <nav>
                <ul>
                    <motion.li initial={{ y: -200 }} animate={{ y: 0 }} transition={{ ease: "easeOut", duration: 0.7 }}>
                        <Link href="/" aria-label="Home Page">
                            Home
                        </Link>
                    </motion.li>
                    <motion.li initial={{ y: -200 }} animate={{ y: 0 }} transition={{ ease: "easeOut", duration: 0.85 }}>
                        <Link href="/resume" aria-label="CV Page">
                            CV
                        </Link>
                    </motion.li>
                    <motion.li initial={{ y: -200 }} animate={{ y: 0 }} transition={{ ease: "easeOut", duration: 1 }}>
                        <Link href="/contact" aria-label="Contact Page">
                            Contact
                        </Link>
                    </motion.li>
                </ul>
            </nav>
            <div className="language">
                <select id="language" onChange={onHandleSelect}>
                    {traduction[lang].header.language.map((list: string) => {
                        return <option key={list}>{list}</option>;
                    })}
                </select>
            </div>
        </header>
    );
}
