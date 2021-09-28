/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";

export default function Footer() {
  return (
    <footer>
      <div className="new-project">
        <span>Débuter un projet</span>
        <p>
          Vous êtes intéressés pour que l'on travaille ensemble ? Rencontrons-nous. Le
          café est pour moi.
        </p>
        <Link href="/contact">
          <a>C'est parti !</a>
        </Link>
      </div>
      <p className="citation">
        « La première étape consiste à établir que quelque chose est possible ; alors la
        probabilité se produira. » – Elon Musk
      </p>
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
          Réalisé par Cyril Lesot <span>&#169;</span> 2021
        </p>
        <p>Made with React / Next.js</p>
      </div>
    </footer>
  );
}
