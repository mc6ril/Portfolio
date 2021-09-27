import Image from "next/image";
import { motion } from "framer-motion";

export default function Profil() {
  return (
    <div className="home-header">
      <motion.h1
        className="title"
        initial={{ x: -1000 }}
        animate={{ x: 0 }}
        transition={{ ease: "easeOut", duration: 1 }}
      >
        Cyril Lesot
      </motion.h1>
      <motion.p
        initial={{ x: 1000 }}
        animate={{ x: 0 }}
        transition={{ ease: "easeOut", duration: 1.5 }}
      >
        Développeur Front-end JS web et mobile
      </motion.p>
      <motion.div
        className="profil-picture"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ ease: "easeOut", duration: 1.5 }}
      >
        <Image
          src="/profil.png"
          alt="my-profile"
          width="250"
          height="250"
          quality={100}
        />
      </motion.div>
    </div>
  );
}
