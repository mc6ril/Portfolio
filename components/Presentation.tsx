import React from "react";
import { traduction } from "../assets/data/lang";
import { Context } from "./context/LangContext";
import { useContext } from "react";

export default function Presentation(): JSX.Element {
    const { lang } = useContext(Context);
    return (
        <div className="presentation">
            <h2 className="section-title">
                {traduction[lang].presentation.title} <br />
                {traduction[lang].presentation.titleTwo}
            </h2>
            <p>{traduction[lang].presentation.content}</p>
        </div>
    );
}
