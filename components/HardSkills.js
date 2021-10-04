import { traduction } from "../assets/data/lang";
import { Context } from "./context/LangContext";
import { useContext } from "react";

export default function HardSkills() {
  const { lang } = useContext(Context);

  return (
    <div className="hard-skills">
      <div>
        <span className="icon-code"></span>
        <h2>{traduction[lang].hardSkills.front.title}</h2>
        <p>{traduction[lang].hardSkills.front.content}</p>
        <h3>{traduction[lang].hardSkills.front.languages}</h3>
        <p>{traduction[lang].hardSkills.front.contentLanguages}</p>
        <h3>{traduction[lang].hardSkills.front.devtools}</h3>
        <ul>
          {traduction[lang].hardSkills.front.contentDevtools.map((list, i) => {
            return <li key={i}>{list}</li>;
          })}
        </ul>
      </div>
      <div>
        <span className="icon-smartphone"></span>
        <h2>{traduction[lang].hardSkills.mobile.title}</h2>
        <p>{traduction[lang].hardSkills.mobile.content}</p>
        <h3>{traduction[lang].hardSkills.mobile.languages}</h3>
        <p>{traduction[lang].hardSkills.mobile.contentLanguages}</p>
        <h3>{traduction[lang].hardSkills.mobile.devtools}</h3>
        <ul>
          {traduction[lang].hardSkills.mobile.contentDevtools.map((list, i) => {
            return <li key={i}>{list}</li>;
          })}
        </ul>
      </div>
      <div>
        <span className="icon-database"></span>
        <h2>{traduction[lang].hardSkills.backend.title}</h2>
        <p>{traduction[lang].hardSkills.backend.content}</p>
        <h3>{traduction[lang].hardSkills.backend.languages}</h3>
        <p>{traduction[lang].hardSkills.backend.contentLanguages}</p>
        <h3>{traduction[lang].hardSkills.backend.devtools}</h3>
        <ul>
          {traduction[lang].hardSkills.backend.contentDevtools.map((list, i) => {
            return <li key={i}>{list}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}
