import { traduction } from "../assets/data/lang";
import { Context } from "./context/LangContext";
import { useContext } from "react";

export default function Presentation() {
  const { lang } = useContext(Context);
  return (
    <div className="presentation">
      <h1>
        {traduction[lang].presentation.title} <br />
        {traduction[lang].presentation.titleTwo}
      </h1>
      <p>{traduction[lang].presentation.content}</p>
    </div>
  );
}
