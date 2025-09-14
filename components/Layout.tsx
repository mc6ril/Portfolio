import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";
import { motion } from "motion/react";
import React from "react";

interface LayoutProps {
    children: React.ReactNode;
    page?: string;
}

export default function Layout({ children, page }: LayoutProps): React.JSX.Element {
    const variants = {
        hidden: { opacity: 0 },
        enter: { opacity: 1 },
        exit: { opacity: 0 },
    };

    return (
        <>
            <Head>
                <meta name="google-site-verification" content="_rX4UrBTq40RyUQxfSe51DRs4CYurT6uJZJlsPX0MA4" />
                <meta name="description" content="Portfolio de Cyril Lesot, Web Developpeur front-end et mobile"></meta>
                <title>{page}</title>
            </Head>
            <Header />

            <motion.main key="page" variants={variants} initial="hidden" animate="enter" exit="exit" transition={{ ease: "linear", duration: 1 }} className="layout">
                {children}
            </motion.main>

            <Footer />
        </>
    );
}
