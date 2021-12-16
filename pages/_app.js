import "../assets/styles/index.scss";
import "notyf/notyf.min.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faHtml5, faCss3Alt, faJsSquare, faReact, faNode, faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faHamburger, faRunning, faBiking, faEnvelope, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faSass } from "@fortawesome/free-brands-svg-icons";
library.add(faHtml5, faCss3Alt, faJsSquare, faReact, faNode, faHamburger, faRunning, faBiking, faGithub, faLinkedinIn, faEnvelope, faSass, faArrowRight);

import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import ContextProvider from "../components/context/LangContext";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    window.history.scrollRestoration = "manual";
  }, []);

  return (
    <AnimatePresence>
      <ContextProvider>
        <Component {...pageProps} />
      </ContextProvider>
    </AnimatePresence>
  );
}

export default MyApp;
