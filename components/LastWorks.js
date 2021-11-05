import { useContext } from "react";
import Image from "next/image";
import { Context } from "./context/LangContext";
import { traduction } from "../assets/data/lang";

const LastWorks = () => {
  const { lang } = useContext(Context);
  return (
    <section className='last-works'>
      <h2 className='section-title'>{traduction[lang].lastWork.title}</h2>
      <div className='bocoloco'>
        <div className='key-infos'>
          <h3>{traduction[lang].lastWork.bocoloco.title}</h3>
          <p>{traduction[lang].lastWork.bocoloco.description}</p>
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
          <Image src={`/${traduction[lang].lastWork.bocoloco.image}`} alt="Logo de l'entreprise Bocoloco, l'épicerie zero déchet" quality={100} layout='fill' />
        </div>
      </div>
    </section>
  );
};

export default LastWorks;
