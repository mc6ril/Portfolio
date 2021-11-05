import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";
import { motion } from "framer-motion";

export default function Layout({ children, page }) {
  const variants = {
    hidden: { opacity: 0 },
    enter: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <>
      <html lang='fr'>
        <Head>
          <meta name='description' content='Portfolio de Cyril Lesot, Web Developpeur front-end et mobile'></meta>
          <title>{page}</title>
        </Head>

        <Header />
        <motion.main
          key='page'
          variants={variants} // Pass the variant object into Framer Motion
          initial='hidden' // Set the initial state to variants.hidden
          animate='enter' // Animated state to variants.enter
          exit='exit'
          transition={{ type: "linear", duration: 1 }} // Set the transition to linear
          className='layout'
        >
          {children}
        </motion.main>
        <Footer />
      </html>
    </>
  );
}
