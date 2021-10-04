import "../assets/styles/globals.css";
import "../assets/fonts/fontstyle.css";
import "../assets/styles/variables.css";
import "../assets/styles/header.css";
import "../assets/styles/profil.css";
import "../assets/styles/hardskills.css";
import "../assets/styles/contact.css";
import "../assets/styles/projects.css";
import "../assets/styles/projectImage.css";
import "../assets/styles/resume.css";
import "../assets/styles/riderz.css";
import "../assets/styles/footer.css";
import "../assets/styles/responsive.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faHtml5,
  faCss3Alt,
  faJsSquare,
  faReact,
  faNode,
} from "@fortawesome/free-brands-svg-icons";
import { faHamburger, faRunning, faBiking } from "@fortawesome/free-solid-svg-icons";
library.add(
  faHtml5,
  faCss3Alt,
  faJsSquare,
  faReact,
  faNode,
  faHamburger,
  faRunning,
  faBiking
);

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
