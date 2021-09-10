/* eslint-disable react/no-unescaped-entities */
import Layout from "../components/Layout";
import HardSkills from "../components/HardSkills";
import Presentation from "../components/Presentation";
import Profil from "../components/Profil";

export default function Home() {
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
