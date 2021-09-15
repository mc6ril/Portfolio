import Image from "next/image";
import json from "../assets/data/projects.json";

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
          return (
            <div className="project" key={index}>
              <Image
                src={`/${project.image}`}
                alt="image-project"
                height="255"
                width="355"
                quality="100"
              />
              <div className="content">
                <h2>{project.title}</h2>
                <a href={`${project.link}`} rel="noreferrer" target="_blank">
                  <span>Voir le site</span>
                  <span className="icon-arrow-right"></span>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
