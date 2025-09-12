import React, { useContext, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";
import { Context } from "./context/LangContext";
import Logos from "./logos/Logos";

interface LocalizedProjectInfo {
    description: string;
}

interface ProjectItem {
    title: string;
    image: string;
    icons: string[];
    link: string;
    github?: string;
    FR: LocalizedProjectInfo;
    EN: LocalizedProjectInfo;
}

interface ProjectImageProps {
    index?: number;
    project: ProjectItem;
    website: string;
    code: string;
}

export default function ProjectImage({ index, project, website, code }: ProjectImageProps): JSX.Element {
    const [isVisible, setIsVisible] = useState<boolean>(true);
    const { lang } = useContext(Context);

    return (
        <section className="project" key={index}>
            <InView threshold={0.25}>
                {({ ref, inView }) => (
                    <motion.div
                        className="image"
                        ref={ref}
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ type: "easeOut", duration: 0.6 }}
                        onMouseEnter={() => setIsVisible(false)}
                        onMouseLeave={() => setIsVisible(true)}
                    >
                        {isVisible ? (
                            <Image src={`/${project.image}`} alt={project[lang].description} quality="100" layout="fill" objectFit="cover" />
                        ) : (
                            <div className="content">
                                <h2>{project.title}</h2>
                                <p>{project[lang].description}</p>
                                <div className="logos">
                                    {project.icons.map((icon, index) => {
                                        return <Logos key={index} type={icon as any} size="3em" />;
                                    })}
                                </div>
                                <div className="links">
                                    <Link href={`${project.link}`} aria-label={`Visit ${project.title} website`}>
                                        <a rel="noreferrer" target="_blank">
                                            <span>{website}</span>
                                            <Logos type="arrow-right" size="1.5em" />
                                        </a>
                                    </Link>
                                    {project.github && (
                                        <Link href={`${project.github}`} aria-label={`Visit ${project.title} on Github`}>
                                            <a rel="noreferrer" target="_blank">
                                                <span>{code}</span>
                                                <Logos type="github" size="1.5em" />
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
