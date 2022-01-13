import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";
import { useContext, useState } from "react";
import { Context } from "./context/LangContext";
import Logos from "./logos/Logos";

export default function ProjectImage({ index, project, website, code }) {
  const [isVisible, setIsVisible] = useState(true);
  const { lang } = useContext(Context);

  return (
    <section className='project' key={index}>
      <InView threshold={0.25}>
        {({ ref, inView, entry }) => (
          <motion.div
            className='image'
            ref={ref}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ type: "easeOut", duration: 0.6 }}
            onMouseEnter={() => setIsVisible(false)}
            onMouseLeave={() => setIsVisible(true)}
          >
            {isVisible ? (
              <Image src={`/${project.image}`} alt={project[lang].description} quality='100' layout='fill' objectFit='cover' />
            ) : (
              <div className='content'>
                <h2>{project.title}</h2>
                <p>{project[lang].description}</p>
                <div className='logos'>
                  {project.icons.map((icon, index) => {
                    return <Logos key={index} type={icon} size='3em' />;
                  })}
                </div>
                <div className='links'>
                  <Link href={`${project.link}`} aria-label={`Visit ${project.title} website`}>
                    <a rel='noreferrer' target='_blank' alt={`Lien vers la page du projet ${project.title}`}>
                      <span>{website}</span>
                      <Logos type='arrow-right' size='1.5em' />
                    </a>
                  </Link>
                  {project.github && (
                    <Link href={`${project.github}`} aria-label={`Visit ${project.source} on Github`}>
                      <a rel='noreferrer' target='_blank' alt={`Lien vers la page du projet sur Github`}>
                        <span>{code}</span>
                        <Logos type='github' size='1.5em' />
                      </a>
                    </Link>
                  )}
                </div>
              </div>
            )}
          </motion.div>
        )}
      </InView>
    </section>
  );
}
