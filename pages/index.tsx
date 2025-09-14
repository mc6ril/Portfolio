import React from "react";
import Layout from "../components/Layout";
import HardSkills from "../components/HardSkills";
import Presentation from "../components/Presentation";
import Profil from "../components/Profil";
import Projects from "../components/Projects";
import LastWorks from "../components/last_works/LastWorks";

export default function Home(): React.JSX.Element {
    return (
        <Layout page={"Portfolio Cyril Lesot, developpeur front-end et mobile - accueil"}>
            <section className="home">
                <Profil />
                <Presentation />
                <HardSkills />
                <LastWorks />
                <Projects />
            </section>
        </Layout>
    );
}
