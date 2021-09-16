/* eslint-disable react/no-unescaped-entities */
export default function Footer() {
  return (
    <footer>
      <div className="new-project">
        <span>Débuter un projet</span>
        <p>
          Vous êtes intéressés pour que l'on travaille ensemble ? Rencontrons-nous. Le
          café est pour moi.
        </p>
        <span>C'est parti !</span>
      </div>
      <p className="citation">
        « La première étape consiste à établir que quelque chose est possible ; alors la
        probabilité se produira. » – Elon Musk
      </p>
      <div className="social-network">
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/cyril-lesot-384380100/">
              <span className="icon-linkedin"></span>
            </a>
          </li>
          <li>
            <a href="https://github.com/mc6ril">
              <span className="icon-github"></span>
            </a>
          </li>
          <li>
            <a href="mailto:cyril.lesot@yahoo.fr">
              <span className="icon-mail"></span>
            </a>
          </li>
        </ul>
      </div>
      <div>
        <p>
          Réalisé par Cyril Lesot <span>&#169;</span> 2021
        </p>
        <p>Made with React / Next.js</p>
      </div>
    </footer>
  );
}
