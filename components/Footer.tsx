/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";
import { traduction } from "../assets/data/lang";
import { Context } from "./context/LangContext";
import React, { useContext } from "react";
import Logos from "./logos/Logos";

export default function Footer(): JSX.Element {
    const { lang } = useContext(Context);

    return (
        <footer>
            <div className="new-project">
                <span>{traduction[lang].footer.newProject.start}</span>
                <p>{traduction[lang].footer.newProject.content}</p>
                <Link href="/contact" aria-label="Contact page" passHref rel="noreferrer" target="_blank">
                    <a>{traduction[lang].footer.newProject.link}</a>
                </Link>
            </div>
            <p className="citation">{traduction[lang].footer.citation}</p>
            <div className="social-network">
                <InView threshold={0.25}>
                    {({ ref, inView }) => (
                        <ul>
                            <motion.li ref={ref} initial={{ y: 60 }} animate={inView ? { y: 0 } : { y: 60 }} transition={{ type: "easeOut", duration: 0.6 }}>
                                <a href="https://www.linkedin.com/in/cyril-lesot-384380100/" aria-label="LinkedIn" rel="noreferrer" target="_blank">
                                    <Logos type="linkedin" size="1em" />
                                </a>
                            </motion.li>
                            <motion.li ref={ref} initial={{ y: 60 }} animate={inView ? { y: 0 } : { y: 60 }} transition={{ type: "easeOut", duration: 0.7 }}>
                                <a href="https://github.com/mc6ril" aria-label="Github" rel="noreferrer" target="_blank">
                                    <Logos type="github" size="1em" />
                                </a>
                            </motion.li>
                            <motion.li ref={ref} initial={{ y: 60 }} animate={inView ? { y: 0 } : { y: 60 }} transition={{ type: "easeOut", duration: 0.8 }}>
                                <a href="mailto:cyril.lesot.dev@gmail.com" aria-label="Mail" rel="noreferrer" target="_blank">
                                    <Logos type="mail" size="1em" />
                                </a>
                            </motion.li>
                        </ul>
                    )}
                </InView>
            </div>
            <div>
                <p>
                    {traduction[lang].footer.by} <span>&#169;</span> {traduction[lang].footer.in}
                </p>
                <p>{traduction[lang].footer.with}</p>
            </div>
        </footer>
    );
}
