import Layout from "../components/Layout";
import HardSkills from "../components/HardSkills";
import Presentation from "../components/Presentation";
import Profil from "../components/Profil";

import { useEffect, useState } from "react";
import json from "../assets/data/projects.json";

export default function Home() {
  const [projects, setProjects] = useState(null);

  useEffect(() => {
    setProjects(json);
  }, []);
  console.log(projects);
  return (
    <Layout page={"Portfolio Cyril Lesot - home"}>
      <section className="home">
        <Profil />
        <Presentation />
        <HardSkills />
      </section>
    </Layout>
  );
}
