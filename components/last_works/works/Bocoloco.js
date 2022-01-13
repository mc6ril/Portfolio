import Image from "next/image";
import { useContext } from "react";
import { traduction } from "../../../assets/data/lang";
import { Context } from "../../context/LangContext";
import Logos from "../../logos/Logos";

const Bocoloco = ({ isHover }) => {
  const { lang } = useContext(Context);

  return (
    <>
      <div className='key-infos'>
        <i>
          <h3>{traduction[lang].lastWork.bocoloco.title}</h3>
          <p>{traduction[lang].lastWork.bocoloco.description}</p>
        </i>
        {!isHover ? (
          <div className='isHovered'>
            <h4>{traduction[lang].lastWork.bocoloco.projects.one.title}</h4>
            <ul>
              {traduction[lang].lastWork.bocoloco.projects.one.list.map((list, i) => {
                return <li key={i}>{list}</li>;
              })}
            </ul>
            <h4>{traduction[lang].lastWork.bocoloco.projects.two.title}</h4>
            <ul>
              {traduction[lang].lastWork.bocoloco.projects.two.list.map((list, i) => {
                return <li key={i}>{list}</li>;
              })}
            </ul>
          </div>
        ) : (
          <>
            <div className='fields'>
              <h4>{traduction[lang].lastWork.bocoloco.applicationTitle}</h4>
              <p>{traduction[lang].lastWork.bocoloco.application}</p>
            </div>
            <div className='languages'>
              <h4>{traduction[lang].lastWork.bocoloco.languagesTitle}</h4>
              {traduction[lang].lastWork.bocoloco.languages.map((icon, i) => {
                return <Logos key={i} type={icon} size='3em' />;
              })}
            </div>
            <div className='devtools'>
              <h4>{traduction[lang].lastWork.bocoloco.devToolsTitle}</h4>
              {traduction[lang].lastWork.bocoloco.contentDevtools.map((tools, i) => (
                <p key={i}>{tools}</p>
              ))}
            </div>
          </>
        )}
      </div>
      <div className='image'>
        <Image
          src={`/${traduction[lang].lastWork.bocoloco.image}`}
          alt="Logo de l'entreprise Bocoloco, l'épicerie zero déchet"
          quality={100}
          layout='fill'
          objectFit='contain'
        />
      </div>
    </>
  );
};

export default Bocoloco;
