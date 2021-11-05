import Image from "next/image";
import { motion } from "framer-motion";
import { traduction } from "../assets/data/lang";
import { Context } from "./context/LangContext";
import { useContext } from "react";

export default function Profil() {
  const { lang } = useContext(Context);

  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04,
        delay: 0.6,
      },
    },
  };

  const sentence = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { type: "spring", bounce: 0.25, delay: 0.5 } },
    exit: { opacity: 0 },
  };

  const item = {
    hidden: { opacity: 1, y: 200 },
    visible: { y: 0, transition: { ease: "easeOut", duration: 0.6 } },
    exit: { opacity: 0, y: -200 },
  };
  const animatedImage = {
    hidden: { scale: 0 },
    visible: { scale: 1, transition: { ease: "easeOut", duration: 1.5 } },
    exit: { scale: 0 },
  };

  return (
    <motion.section className='home-header' variants={container} initial='hidden' animate='visible'>
      <motion.h1 className='title' variants={item}>
        Cyril Lesot
      </motion.h1>
      <motion.p variants={sentence}>{traduction[lang].profil.title}</motion.p>
      <motion.div className='profil-picture' variants={animatedImage}>
        <Image src='/images/profil.png' alt='Mon image de profil sur la page home' width='250' height='250' quality={100} />
      </motion.div>
    </motion.section>
  );
}
