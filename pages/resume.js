/* eslint-disable react/no-unescaped-entities */
import Layout from "../components/Layout";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SiMongodb, SiMysql, SiRedux } from "react-icons/si";

export default function Resume({ page }) {
  return (
    <Layout page='Portfolio Cyril Lesot, developpeur front-end et mobile - resume'>
      <section className='resume'>
        <div className='left-resume'>
          <div className='resume-profil'>
            <div className='resume-profil-image'>
              <Image src='/images/profil3.jpg' alt='Ma photo sur le CV de Cyril Lesot' width='255' height='255' quality={100} />
            </div>
            <h3>Cyril Lesot</h3>
            <p>
              Développeur Front-end React.js <br /> Web et mobile
            </p>
          </div>
          <div className='resume-coordinates'>
            <h2>Coordonnées</h2>
            <span>Paris, 75012</span>
            <span>06 79 15 86 96</span>
            <span>cyril.lesot@yahoo.fr</span>
          </div>
          <div className='resume-hardskills'>
            <h2>HardSkills</h2>
            <div className='icons'>
              <FontAwesomeIcon icon={["fab", "html5"]} style={{ color: "#DC4A25" }} size='3x' />
              <FontAwesomeIcon icon={["fab", "css3-alt"]} style={{ color: "#3495D0" }} size='3x' />
              <FontAwesomeIcon icon={["fab", "react"]} style={{ color: "#5ED2F3" }} size='3x' />
              <FontAwesomeIcon icon={["fab", "js-square"]} style={{ color: "#EFD81D" }} size='3x' />
              <FontAwesomeIcon icon={["fab", "node"]} style={{ color: "#75AC5F" }} size='3x' />
              <FontAwesomeIcon icon={["fab", "sass"]} style={{ color: "#C66593" }} size='3x' />
              <FontAwesomeIcon icon={["fab", "github"]} style={{ color: "white" }} size='3x' />
              <SiMongodb size='3em' color='#7ABD7E' />
              <SiMysql size='3em' color='#F2F2F2' />
              <SiRedux size='3em' color='#6F44B3' />
            </div>
          </div>
          <div>
            <h2>SoftSkills</h2>
            <ul>
              <li>Rigueur</li>
              <li>Autonomie</li>
              <li>Humilité</li>
              <li>Prise de décisions</li>
              <li>Sens des responsabilités</li>
              <li>Capacité d'adaptation</li>
              <li>Travail d'équipe</li>
            </ul>
          </div>
          <div className='hobbies'>
            <h2>Centres d'intérêts</h2>
            <div className='hobbies-list'>
              <div>
                <FontAwesomeIcon icon='biking' alt />
                <span>Vélo</span>
              </div>
              <div>
                <FontAwesomeIcon icon='running' />
                <span>Running</span>
              </div>
              <div>
                <FontAwesomeIcon icon='hamburger' />
                <span>Cuisine</span>
              </div>
            </div>
          </div>
        </div>
        <div className='right-resume'>
          <div className='resume-header'>
            <p>{`Après plusieurs années en tant que Revenue Manager dans l'hôtellerie, j'ai décidé de me former au métier de web développeur pour acquérir de nouvelles compétences. Ayant terminé ma formation au Réacteur à Paris, et après une expérience de près de 3 mois au sein d'une startup en tant que developpeur fullstack JS/ React, je suis actuellement en recherche active de mon premier contrat !`}</p>
          </div>
          <div className='resume-box'>
            <h2>Formation</h2>
            <div className='box'>
              <div className='dates'>
                <p>06/21 - 09/21</p>
              </div>
              <div className='details'>
                <h3>Développement d'applications web et mobile</h3>
                <span>Le Réacteur - Paris (75)</span>
                <ul>
                  <li>Maîtrise de la programmation JavaScript ES6</li>
                  <li>Utilisation des outils de développement VS Code et Expo</li>
                  <li>Développement de sites internet "responsive"</li>
                  <li>Création et déploiement d'API (Heroku)</li>
                  <li>Conception et administration de bases de données NoSQL (MongoDB)</li>
                  <li>Installation, configuration et utilisation de bibliothèques JavaScript</li>
                  <li>Création de sites web dynamiques et statiques (React et Next.js)</li>
                  <li>Utilisation de Redux</li>
                  <li>Conception d'applications mobile pour iOS et Android (React Native)</li>
                  <li>Implémentation de tests unitaire</li>
                  <li>Code versionning avec Github</li>
                  <li>Connaissance de Typescript</li>
                </ul>
              </div>
            </div>
            <div className='box'>
              <div className='dates'>
                <p>09/12 - 09/17</p>
              </div>
              <div className='details'>
                <h3>MBA en hôtellerie internationale, spécialité Revenue Management</h3>
                <span>Vatel Business School - Lyon (69)</span>
              </div>
            </div>
          </div>
          <div className='resume-projects'>
            <h2>Projets réalisés</h2>
            <ul>
              <li>
                Mon portfolio :{" "}
                <a href='https://cyril-lesot-portfolio.vercel.app/' alt='Lien vers le portfolio de Cyril Lesot'>
                  https://cyril-lesot-portfolio.vercel.app/
                </a>
              </li>
              <li>{`Réalisation d'un MVP d'une application mobile en React Native : rassemblement de motards autour d'évènements`}</li>
              <li>
                Site Marvel crée avec React :
                <a href='https://marvel-by-cyril-react.netlify.app/' alt='Lien externe ver le projet Marvel crée par Cyril Lesot pendant sa formation'>
                  https://marvel-by-cyril-react.netlify.app/
                </a>
              </li>
              <li>
                Réplique du site M.Moustache en React :
                <a
                  href='https://react-mrmoustache-cyril.netlify.app/'
                  alt='Lien vers une réplique du site M.Moustache, crée par Cyril Lesot pendant sa formation'
                >
                  https://react-mrmoustache-cyril.netlify.app/
                </a>
              </li>
            </ul>
          </div>
          <div className='resume-box'>
            <h2>Parcours professionnel</h2>
            <div className='box'>
              <div className='dates'>
                <p>10/21 - 12/21</p>
              </div>
              <div className='details'>
                <h3>Développeur fullstack JS/React</h3>
                <span>Bocoloco, Paris (75)</span> <br />
                <h4 className='title'> {`>`} Application de pilotage d'entreprise / CRM (React)</h4>
                <ul>
                  <li>Intégration de nouveaux graphiques pour suivre l'activité avec Rechartjs et mySQL (back-end / front-end)</li>
                  <li>Automatisation d'envoie de facture depuis l'application back-office en utilisant l'API Stripe (back-end / front-end)</li>
                  <li>Utilisation de Redux</li>
                  <li>Refonte du CSS avec l'implémentation de Saas</li>
                  <li>Revue et refactoring du code existant</li>
                </ul>
                <h4 className='title'>{`>`} Application mobile (React Native)</h4>
                <ul>
                  <li>Utilisation de Expo et du langage natif de React Native</li>
                  <li>Mise à jour et implémentation de nouvelles fonctionnalités</li>
                </ul>
              </div>
            </div>
            <div className='box'>
              <div className='dates'>
                <p>12/19 - 08/20</p>
              </div>
              <div className='details'>
                <h3>Revenue Manager multi-hôtels</h3>
                <span>Accor, Rungis (94)</span>
              </div>
            </div>
            <div className='box'>
              <div className='dates'>
                <p>07/19 - 12/19</p>
              </div>
              <div className='details'>
                <h3>Cluster Revenue Manager</h3>
                <span>Marriott, Paris Champs-Elysées (75)</span>
              </div>
            </div>
            <div className='box'>
              <div className='dates'>
                <p>10/17 - 07/19</p>
              </div>
              <div className='details'>
                <h3>Revenue Manager multi-hôtels</h3>
                <span>Accor, Roissy-en-France (95)</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
