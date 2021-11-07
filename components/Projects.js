import json from "../assets/data/projects.json";
import ProjectImage from "./ProjectImage";
import { traduction } from "../assets/data/lang";
import { Context } from "./context/LangContext";
import { useContext } from "react";

export default function Projects() {
  const projects = json;
  const { lang } = useContext(Context);

  return (
    <section className='projects'>
      <h2 className='section-title'>{traduction[lang].projects.title}</h2>
      <p>
        {traduction[lang].projects.content}{" "}
        <a href='mailto:cyril.lesot@yahoo.fr' alt="Lien d'ouverture de la boite mail pour contacter Cyril Lesot">
          <span>{traduction[lang].projects.mail}</span>
        </a>
      </p>
      <div className='all-projects'>
        {projects.map((project, index) => {
          return <ProjectImage project={project} key={index} website={traduction[lang].projects.website} code={traduction[lang].projects.source} />;
        })}
      </div>
    </section>
  );
}
