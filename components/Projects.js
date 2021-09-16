import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
                height="480"
                width="950"
                quality="100"
              />
              <div className="content">
                <div className="content-text">
                  <div className="logos">
                    {project.icons.map((icon, index) => {
                      return (
                        <FontAwesomeIcon
                          key={index}
                          icon={[`${icon.type}`, `${icon.iconType}`]}
                          style={{ color: `${icon.color}` }}
                          size="3x"
                        />
                      );
                    })}
                  </div>
                  <h1>{project.title}</h1>
                  <a href={`${project.link}`} rel="noreferrer" target="_blank">
                    <span>Voir le site</span>
                    <span className="icon-arrow-right"></span>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
