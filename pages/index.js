import Layout from "../components/Layout";
import HardSkills from "../components/HardSkills";
import Presentation from "../components/Presentation";
import Profil from "../components/Profil";
import Projects from "../components/Projects";
import LastWorks from "../components/LastWorks";

export default function Home() {
  return (
    <Layout page={"Portfolio Cyril Lesot, developpeur front-end et mobile - accueil"}>
      <section className='home'>
        <Profil />
        <Presentation />
        <HardSkills />
        <LastWorks />
        <Projects />
      </section>
    </Layout>
  );
}
