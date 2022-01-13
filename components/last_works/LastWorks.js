import { useContext, useState } from "react";
import { Context } from "../context/LangContext";
import { traduction } from "../../assets/data/lang";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";
import Bocoloco from "./works/Bocoloco";

const LastWorks = () => {
  const { lang } = useContext(Context);
  const [isHover, setIsHover] = useState(false);
  return (
    <section className='last-works'>
      <h2 className='section-title'>{traduction[lang].lastWork.title}</h2>
      <InView threshold={0.25}>
        {({ ref, inView, entry }) => (
          <motion.div
            className='work'
            ref={ref}
            initial={{ x: -200, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : { x: -200, opacity: 0 }}
            transition={{ type: "easeOut", duration: 0.8 }}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
          >
            <Bocoloco isHover={isHover} />
          </motion.div>
        )}
      </InView>
    </section>
  );
};

export default LastWorks;
