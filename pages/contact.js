import Header from "../components/Header";
import Image from "next/image";
import axios from "axios";
import { useState } from "react";
import { motion } from "framer-motion";
import { traduction } from "../assets/data/lang";
import { Context } from "../components/context/LangContext";
import { useContext } from "react";

export default function Contact() {
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const { lang } = useContext(Context);

  const onHandleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`https://portfolio-cyril-lesot.herokuapp.com/form`, {
        name: name,
        email: email,
        description: description,
      });
      if (response.status === 200) {
        setMessage(`${traduction[lang].contact.sucessMessage}`);
      }
    } catch (error) {
      setMessage(`${traduction[lang].contact.errorMessage}`);
    }
  };

  //motion
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,

      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { y: 200 },
    show: { y: 0, transition: { ease: "easeOut", duration: 0.7 } },
  };
  const animatedImage = {
    hidden: { scale: 0 },
    show: { scale: 1, transition: { ease: "easeOut", duration: 0.6 } },
    exit: { scale: 0 },
  };

  return (
    <motion.section
      className='contact layout'
      variants={container}
      initial='hidden'
      animate='show'
      page={"Portfolio Cyril Lesot, developpeur front-end et mobile - contact"}
    >
      <Header />

      <motion.h1 variants={item}>{traduction[lang].contact.title}</motion.h1>
      <motion.div className='profil-picture' variants={animatedImage}>
        <Image src='/images/profil.png' alt='Mon image de profil sur la page contact' width='250' height='250' quality={100} />
      </motion.div>

      <form className='contact-form' onSubmit={onHandleSubmit}>
        <div className='first-inputs'>
          <div className='control'>
            <label htmlFor='name'>{traduction[lang].contact.name}</label>
            <input type='text' id='name' required onChange={(e) => setName(e.currentTarget.value)} />
          </div>
          <div className='control'>
            <label htmlFor='email'>{traduction[lang].contact.email}</label>
            <input type='email' id='email' required onChange={(e) => setEmail(e.currentTarget.value)} />
          </div>
        </div>
        <div>
          <div className='control'>
            <label htmlFor='message'>{traduction[lang].contact.message}</label>
            <textarea name='message' id='message' rows='5' required onChange={(e) => setDescription(e.currentTarget.value)}></textarea>
          </div>
          {message && <p className='message'>{message}</p>}
        </div>

        <input type='submit' value={`${traduction[lang].contact.button}`} />
      </form>
    </motion.section>
  );
}
