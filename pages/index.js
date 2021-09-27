import Layout from "../components/Layout";
import HardSkills from "../components/HardSkills";
import Presentation from "../components/Presentation";
import Profil from "../components/Profil";
import Projects from "../components/Projects";

export default function Home() {
  return (
    <Layout page={"Portfolio Cyril Lesot - home"}>
      <section className="home">
        <Profil />
        <Presentation />
        <HardSkills />
        <Projects />
      </section>
    </Layout>
  );
}
