/* eslint-disable react/no-unescaped-entities */
import Layout from "../components/Layout";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Resume() {
  return (
    <Layout page="resume">
      <section className="resume">
        <div className="left-resume">
          <div className="resume-profil">
            <div className="resume-profil-image">
              <Image
                src="/profil3.jpg"
                alt="my-profile"
                width="255"
                height="255"
                quality={100}
              />
            </div>
            <h3>Cyril Lesot</h3>
            <p>
              Développeur Web et mobile <br />
              Fullstack JS
            </p>
          </div>
          <div className="resume-coordinates">
            <h2>Coordonnées</h2>
            <span>Paris, 75012</span>
            <span>06 79 15 86 96</span>
            <span>cyril.lesot@yahoo.fr</span>
          </div>
          <div className="resume-hardskills">
            <h2>HardSkills</h2>
            <FontAwesomeIcon
              icon={["fab", "html5"]}
              style={{ color: "#DC4A25" }}
              size="2x"
            />
            <FontAwesomeIcon
              icon={["fab", "css3-alt"]}
              style={{ color: "#3495D0" }}
              size="2x"
            />
            <FontAwesomeIcon
              icon={["fab", "react"]}
              style={{ color: "#5ED2F3" }}
              size="2x"
            />
            <FontAwesomeIcon
              icon={["fab", "js-square"]}
              style={{ color: "#EFD81D" }}
              size="2x"
            />
            <FontAwesomeIcon
              icon={["fab", "node"]}
              style={{ color: "#75AC5F" }}
              size="2x"
            />
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
          <div className="hobbies">
            <h2>Centres d'intérêts</h2>
            <div className="hobbies-list">
              <div>
                <FontAwesomeIcon icon="biking" />
                <span>Vélo</span>
              </div>
              <div>
                <FontAwesomeIcon icon="running" />
                <span>Running</span>
              </div>
              <div>
                <FontAwesomeIcon icon="hamburger" />
                <span>Cuisine</span>
              </div>
            </div>
          </div>
        </div>
        <div className="right-resume">
          <div className="resume-header">
            <p>{`Après plusieurs années en tant que Revenue Manager dans l'hôtellerie, j'ai décidé de me former au métier de web développeur pour acquérir de nouvelles compétences. Ayant terminé ma formation au Réacteur à Paris, je suis actuellement en recherche active d'un stage de 6 mois !`}</p>
          </div>
          <div className="resume-box">
            <h2>Formation</h2>
            <div className="box">
              <div className="dates">
                <p>06/21 - 09/21</p>
              </div>
              <div className="details">
                <h3>Développement d'applications web et mobile</h3>
                <span>Le Réacteur - Paris (75)</span>
                <ul>
                  <li>Maîtrise de la programmation JavaScript ES6</li>
                  <li>Utilisation des outils de développement VS Code et Expo</li>
                  <li>Développement de sites internet "responsive"</li>
                  <li>Création et déploiement d'API (Heroku)</li>
                  <li>
                    Conception et administration de bases de données NoSQL (MongoDB)
                  </li>
                  <li>
                    Installation, configuration et utilisation de bibliothèques JavaScript
                  </li>
                  <li>
                    Création de sites web dynamiques et statiques (React et Next.js)
                  </li>
                  <li>Utilisation de Redux</li>
                  <li>
                    Conception d'applications mobile pour iOS et Android (React Native)
                  </li>
                  <li>Implémentation de tests unitaire</li>
                  <li>Code versionning avec Github</li>
                  <li>Connaissance de Typescript</li>
                </ul>
              </div>
            </div>
            <div className="box">
              <div className="dates">
                <p>09/12 - 09/17</p>
              </div>
              <div className="details">
                <h3>MBA en hôtellerie internationale, spécialité Revenue Management</h3>
                <span>Vatel Business School - Lyon (69)</span>
              </div>
            </div>
          </div>
          <div className="resume-projects">
            <h2>Projets réalisés</h2>
            <ul>
              <li>{`Réalisation d'un MVP d'une application mobile en React Native : rassemblement de motards autour d'évènements`}</li>
              <li>
                Site Marvel crée avec React :
                <a href="https://marvel-by-cyril-react.netlify.app/">
                  https://marvel-by-cyril-react.netlify.app/
                </a>
              </li>
              <li>
                Réplique du site M.Moustache en React :
                <a href="https://react-mrmoustache-cyril.netlify.app/">
                  https://react-mrmoustache-cyril.netlify.app/
                </a>
              </li>
            </ul>
          </div>
          <div className="resume-box">
            <h2>Parcours professionnel</h2>
            <div className="box">
              <div className="dates">
                <p>12/19 - 08/20</p>
              </div>
              <div className="details">
                <h3>Revenue Manager multi-hôtels</h3>
                <span>Accor, Rungis (94)</span>
              </div>
            </div>
            <div className="box">
              <div className="dates">
                <p>07/19 - 12/19</p>
              </div>
              <div className="details">
                <h3>Cluster Revenue Manager</h3>
                <span>Marriott, Paris Champs-Elysées (75)</span>
              </div>
            </div>
            <div className="box">
              <div className="dates">
                <p>10/17 - 07/19</p>
              </div>
              <div className="details">
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
