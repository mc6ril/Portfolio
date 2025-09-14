import React, { useContext, useState } from "react";
import { Context } from "../context/LangContext";
import { traduction } from "../../assets/data/lang";
import { motion } from "motion/react";
import { InView } from "react-intersection-observer";
import Bocoloco from "./works/Bocoloco";
import Perifit from "./works/Perifit";

const LastWorks: React.FC = () => {
    const { lang } = useContext(Context);
    const [isHoverBocoloco, setIsHoverBocoloco] = useState<boolean>(false);
    const [isHoverPerifit, setIsHoverPerifit] = useState<boolean>(false);
    return (
        <section className="last-works">
            <h2 className="section-title">{traduction[lang].lastWork.title}</h2>
            <div className="works-container">
                <InView threshold={0.25}>
                    {({ ref, inView }) => (
                        <motion.div
                            className="work"
                            ref={ref}
                            initial={{ x: 200, opacity: 0 }}
                            animate={inView ? { x: 0, opacity: 1 } : { x: 200, opacity: 0 }}
                            transition={{ ease: "easeOut", duration: 0.8, delay: 0.2 }}
                            onMouseEnter={() => setIsHoverPerifit(true)}
                            onMouseLeave={() => setIsHoverPerifit(false)}
                        >
                            <Perifit isHover={isHoverPerifit} />
                        </motion.div>
                    )}
                </InView>
                <InView threshold={0.25}>
                    {({ ref, inView }) => (
                        <motion.div
                            className="work"
                            ref={ref}
                            initial={{ x: -200, opacity: 0 }}
                            animate={inView ? { x: 0, opacity: 1 } : { x: -200, opacity: 0 }}
                            transition={{ ease: "easeOut", duration: 0.8 }}
                            onMouseEnter={() => setIsHoverBocoloco(true)}
                            onMouseLeave={() => setIsHoverBocoloco(false)}
                        >
                            <Bocoloco isHover={isHoverBocoloco} />
                        </motion.div>
                    )}
                </InView>
            </div>
        </section>
    );
};

export default LastWorks;
