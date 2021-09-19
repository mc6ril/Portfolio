import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function ProjectImage({ index, project }) {
  return (
    <div className="project" key={index}>
      <div className="image">
        <Image
          src={`/${project.image}`}
          alt="image-project"
          quality="100"
          layout="fill"
        />
      </div>

      <div className="content">
        <h2>{project.title}</h2>
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
        <Link href={`${project.link}`}>
          <a rel="noreferrer" target="_blank">
            <span>Voir le site</span>
            <span className="icon-arrow-right"></span>
          </a>
        </Link>
      </div>
    </div>
  );
}
