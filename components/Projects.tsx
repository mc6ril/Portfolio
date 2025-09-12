import React from "react";
import json from "../assets/data/projects.json";
import ProjectImage from "./ProjectImage";
import { traduction } from "../assets/data/lang";
import { Context } from "./context/LangContext";
import { useContext } from "react";

// Minimal project typing based on usage
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

export default function Projects(): JSX.Element {
    const projects = json as unknown as ProjectItem[];
    const { lang } = useContext(Context);

    return (
        <section className="projects">
            <h2 className="section-title">{traduction[lang].projects.title}</h2>
            <p>
                {traduction[lang].projects.content}{" "}
                <a href="mailto:cyril.lesot@yahoo.fr" rel="noreferrer" target="_blank">
                    <span>{traduction[lang].projects.mail}</span>
                </a>
            </p>
            <div className="all-projects">
                {projects.map((project, index) => {
                    return <ProjectImage project={project} key={index} website={traduction[lang].projects.website} code={traduction[lang].projects.source} />;
                })}
            </div>
        </section>
    );
}
