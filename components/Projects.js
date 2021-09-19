import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import json from "../assets/data/projects.json";
import ProjectImage from "./ProjectImage";

export default function Projects() {
  const projects = json;
  return (
    <div className="projects">
      <h1>Mes projets récents</h1>
      <p>
        Voici quelques exemples de mes derniers projets. Vous voulez en savoir plus ?{" "}
        <a href="mailto:cyril.lesot@yahoo.fr">
          <span>Envoyez-moi un email</span>
        </a>
      </p>
      <div className="all-projects">
        {projects.map((project, index) => {
          return <ProjectImage project={project} key={index} />;
        })}
      </div>
    </div>
  );
}
