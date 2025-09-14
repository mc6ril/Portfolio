import React, { useContext } from "react";
import Image from "next/image";
import { traduction } from "../../../assets/data/lang";
import { Context } from "../../context/LangContext";
import Logos from "../../logos/Logos";

interface PerifitProps {
    isHover: boolean;
}

const Perifit: React.FC<PerifitProps> = ({ isHover }) => {
    const { lang } = useContext(Context);

    return (
        <>
            <div className="key-infos">
                <i>
                    <h3>{traduction[lang].lastWork.perifit.title}</h3>
                    <p>{traduction[lang].lastWork.perifit.description}</p>
                </i>
                {!isHover ? (
                    <div className="isHovered">
                        <h4>{traduction[lang].lastWork.perifit.projects.one.title}</h4>
                        <ul>
                            {traduction[lang].lastWork.perifit.projects.one.list.map((list: string, i: number) => {
                                return <li key={i}>{list}</li>;
                            })}
                        </ul>
                        <h4>{traduction[lang].lastWork.perifit.projects.two.title}</h4>
                        <ul>
                            {traduction[lang].lastWork.perifit.projects.two.list.map((list: string, i: number) => {
                                return <li key={i}>{list}</li>;
                            })}
                        </ul>
                    </div>
                ) : (
                    <>
                        <div className="fields">
                            <h4>{traduction[lang].lastWork.perifit.applicationTitle}</h4>
                            <p>{traduction[lang].lastWork.perifit.application}</p>
                        </div>
                        <div className="languages">
                            <h4>{traduction[lang].lastWork.perifit.languagesTitle}</h4>
                            {traduction[lang].lastWork.perifit.languages.map((icon: string, i: number) => {
                                return <Logos key={i} type={icon as any} size="3em" />;
                            })}
                        </div>
                        <div className="devtools">
                            <h4>{traduction[lang].lastWork.perifit.devToolsTitle}</h4>
                            {traduction[lang].lastWork.perifit.contentDevtools.map((tools: string, i: number) => (
                                <p key={i}>{tools}</p>
                            ))}
                        </div>
                    </>
                )}
            </div>
            <div className="image">
                <Image src={`/${traduction[lang].lastWork.perifit.image}`} alt="Logo de l'entreprise Perifit" fill style={{ objectFit: "contain" }} />
            </div>
        </>
    );
};

export default Perifit;
