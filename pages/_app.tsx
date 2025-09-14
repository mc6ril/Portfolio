import "../assets/styles/index.scss";
import "notyf/notyf.min.css";

import React, { useEffect } from "react";
import ContextProvider from "../components/context/LangContext";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
    useEffect(() => {
        window.history.scrollRestoration = "manual";
    }, []);

    return (
        <ContextProvider>
            <Component {...pageProps} />
        </ContextProvider>
    );
}

export default MyApp;
