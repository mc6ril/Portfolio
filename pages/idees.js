/* eslint-disable react/no-unescaped-entities */
import Layout from "../components/Layout";

export default function Idees() {
  return (
    <Layout page="idees">
      <div>
        <h1>Idées de développement</h1>
        <p>Single page avec lien de direction vers :</p>
        <ul>
          <li>CV</li>
          <li>
            Réalisations qui serait un composant qui contiendraient eux mêmes le code des
            pages crée dans mes projets
          </li>
          <li>
            Lien vers le landing page de l'app Rider, qui contiendra un lien APK pour
            télécharger l'app
          </li>
          <li>Formulaire de contact</li>
        </ul>

        <h1>Backend</h1>
        <p>Réalisation d'un backend avec plusieurs models : </p>
        <ul>
          <li>CV : formations / experiences / Profil</li>
          <li>Portfolio</li>
        </ul>
      </div>
    </Layout>
  );
}
