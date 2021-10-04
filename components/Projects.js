import json from "../assets/data/projects.json";
import ProjectImage from "./ProjectImage";
import { traduction } from "../assets/data/lang";
import { Context } from "./context/LangContext";
import { useContext } from "react";

export default function Projects() {
  const projects = json;
  const { lang } = useContext(Context);

  return (
    <div className="projects">
      <h1>{traduction[lang].projects.title}</h1>
      <p>
        {traduction[lang].projects.content}{" "}
        <a href="mailto:cyril.lesot@yahoo.fr">
          <span>{traduction[lang].projects.mail}</span>
        </a>
      </p>
      <div className="all-projects">
        {projects.map((project, index) => {
          return (
            <ProjectImage
              project={project}
              key={index}
              website={traduction[lang].projects.website}
            />
          );
        })}
      </div>
    </div>
  );
}
