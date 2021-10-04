/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";
import { traduction } from "../assets/data/lang";
import { Context } from "./context/LangContext";
import { useContext } from "react";

export default function Footer() {
  const { lang } = useContext(Context);

  return (
    <footer>
      <div className="new-project">
        <span>{traduction[lang].footer.newProject.start}</span>
        <p>{traduction[lang].footer.newProject.content}</p>
        <Link href="/contact">
          <a>{traduction[lang].footer.newProject.link}</a>
        </Link>
      </div>
      <p className="citation">{traduction[lang].footer.citation}</p>
      <div className="social-network">
        <InView threshold={0.25}>
          {({ ref, inView, entry }) => (
            <ul>
              <motion.li
                ref={ref}
                initial={{ y: 60 }}
                animate={inView ? { y: 0 } : { y: 60 }}
                transition={{ type: "easeOut", duration: 0.6 }}
              >
                <a href="https://www.linkedin.com/in/cyril-lesot-384380100/">
                  <span className="icon-linkedin"></span>
                </a>
              </motion.li>
              <motion.li
                ref={ref}
                initial={{ y: 60 }}
                animate={inView ? { y: 0 } : { y: 60 }}
                transition={{ type: "easeOut", duration: 0.7 }}
              >
                <a href="https://github.com/mc6ril">
                  <span className="icon-github"></span>
                </a>
              </motion.li>
              <motion.li
                ref={ref}
                initial={{ y: 60 }}
                animate={inView ? { y: 0 } : { y: 60 }}
                transition={{ type: "easeOut", duration: 0.8 }}
              >
                <a href="mailto:cyril.lesot@yahoo.fr">
                  <span className="icon-mail"></span>
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
