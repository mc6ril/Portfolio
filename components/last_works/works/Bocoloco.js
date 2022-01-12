import Image from "next/image";
import { useContext } from "react";
import { traduction } from "../../../assets/data/lang";
import { Context } from "../../context/LangContext";

const Bocoloco = () => {
  const { lang } = useContext(Context);
  return (
    <>
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
        <Image src={`/${traduction[lang].lastWork.bocoloco.image}`} alt="Logo de l'entreprise Bocoloco, l'épicerie zero déchet" quality={100} layout='fill' />
      </div>
      ;
    </>
  );
};

export default Bocoloco;
