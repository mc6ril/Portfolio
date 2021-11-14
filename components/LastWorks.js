import { useContext } from "react";
import Image from "next/image";
import { Context } from "./context/LangContext";
import { traduction } from "../assets/data/lang";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";

const LastWorks = () => {
  const { lang } = useContext(Context);
  return (
    <section className='last-works'>
      <h2 className='section-title'>{traduction[lang].lastWork.title}</h2>
      <InView threshold={0.25}>
        {({ ref, inView, entry }) => (
          <motion.div
            className='bocoloco'
            ref={ref}
            initial={{ x: -200, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : { x: -200, opacity: 0 }}
            transition={{ type: "easeOut", duration: 0.8 }}
          >
            <div className='key-infos'>
              <i>
                <h3>{traduction[lang].lastWork.bocoloco.title}</h3>
                <p>{traduction[lang].lastWork.bocoloco.description}</p>
              </i>

              <div className='fields'>
                <h4>{traduction[lang].lastWork.bocoloco.applicationTitle}</h4>
                <p>{traduction[lang].lastWork.bocoloco.application}</p>
              </div>
              <div className='languages'>
                <h4>{traduction[lang].lastWork.bocoloco.languagesTitle}</h4>
                <p>{traduction[lang].lastWork.bocoloco.languages}</p>
              </div>
              <div className='devtools'>
                <h4>{traduction[lang].lastWork.bocoloco.devToolsTitle}</h4>
                {traduction[lang].lastWork.bocoloco.contentDevtools.map((tools, i) => (
                  <p key={i}>{tools}</p>
                ))}
              </div>
            </div>
            <div className='image'>
              <Image
                src={`/${traduction[lang].lastWork.bocoloco.image}`}
                alt="Logo de l'entreprise Bocoloco, l'épicerie zero déchet"
                quality={100}
                layout='fill'
              />
            </div>
          </motion.div>
        )}
      </InView>
    </section>
  );
};

export default LastWorks;
