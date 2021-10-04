import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";

export default function ProjectImage({ index, project, website }) {
  return (
    <div className="project" key={index}>
      <InView threshold={0.25}>
        {({ ref, inView, entry }) => (
          <motion.div
            className="image"
            ref={ref}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ type: "easeOut", duration: 0.6 }}
          >
            <Image
              src={`/${project.image}`}
              alt="image-project"
              quality="100"
              layout="fill"
            />
          </motion.div>
        )}
      </InView>

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
            <span>{website}</span>
            <span className="icon-arrow-right"></span>
          </a>
        </Link>
      </div>
    </div>
  );
}
