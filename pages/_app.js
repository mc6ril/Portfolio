import "../assets/styles/globals.css";
import "../assets/fonts/font2/stylesheet.css";
import "../assets/fonts/fontstyle.css";
import "../assets/styles/variables.css";
import "../assets/styles/header.css";
import "../assets/styles/profil.css";
import "../assets/styles/hardskills.css";
import "../assets/styles/contact.css";
import "../assets/styles/projects.css";
import "../assets/styles/resume.css";
import "../assets/styles/footer.css";

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

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
