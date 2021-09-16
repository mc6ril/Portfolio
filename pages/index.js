import Layout from "../components/Layout";
import HardSkills from "../components/HardSkills";
import Presentation from "../components/Presentation";
import Profil from "../components/Profil";

import Projects from "../components/Projects";

export default function Home({ data }) {
  const projectsList = [];

  data.forEach((project) => {
    projectsList.push({
      name: project.name,
      stars: project.stargazers_count,
      url: project.html_url,
      description: project.description,
      language: project.language,
    });
  });

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

export async function getStaticProps() {
  try {
    const res = await fetch("https://api.github.com/users/mc6ril/repos");
    const data = await res.json();

    if (!data) {
      return {
        notFound: true,
      };
    }

    return {
      props: { data },
    };
  } catch (error) {
    console.error(error);
  }
}
