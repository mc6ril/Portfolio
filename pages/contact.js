import Header from "../components/Header";
import Image from "next/image";
import axios from "axios";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");

  console.log(message);

  const onHandleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `https://portfolio-cyril-lesot.herokuapp.com/form`,
        {
          name: name,
          email: email,
          description: description,
        }
      );
      if (response.status === 200) {
        setMessage("Email envoyé avec succés");
      }
    } catch (error) {
      setMessage("Une erreur est survenue. Veuillez réessayer.");
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
      className="contact layout"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <Header />

      <motion.h1
        variants={item}
      >{`Merci de prendre le temps de me contacter. Comment puis-je vous aider ?`}</motion.h1>
      <motion.div className="profil-picture" variants={animatedImage}>
        <Image
          src="/profil.png"
          alt="my-profile"
          width="250"
          height="250"
          quality={100}
        />
      </motion.div>

      <form className="contact-form" onSubmit={onHandleSubmit}>
        <div className="first-inputs">
          <div className="control">
            <label htmlFor="name">Nom</label>
            <input
              type="text"
              id="name"
              required
              onChange={(e) => setName(e.currentTarget.value)}
            />
          </div>
          <div className="control">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              required
              onChange={(e) => setEmail(e.currentTarget.value)}
            />
          </div>
        </div>
        <div>
          <div className="control">
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              rows="5"
              required
              onChange={(e) => setDescription(e.currentTarget.value)}
            ></textarea>
          </div>
          {message && <p className="message">{message}</p>}
        </div>

        <input type="submit" value="Envoyer" />
      </form>
    </motion.section>
  );
}
