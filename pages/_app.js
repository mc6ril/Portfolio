import "../assets/styles/index.scss";
import "notyf/notyf.min.css";

import ContextProvider from "../components/context/LangContext";
import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";

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
