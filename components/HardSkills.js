export default function HardSkills() {
  return (
    <div className="hard-skills">
      <div>
        <span className="icon-code"></span>
        <h2> Développeur Front-end</h2>
        <p>
          {`J'aime coder des projets FromScratch, ou apporter de nouvelles idées à des
        projets existants.`}
        </p>
        <h3>Languages parlés</h3>
        <p>HTML, CSS, JavaScript, React, Redux, Next.js, Typescript</p>
        <h3>Outils de développement</h3>
        <ul>
          <li>Github</li>
          <li>Terminal</li>
          <li>Codepen</li>
          <li>Figma</li>
        </ul>
      </div>
      <div>
        <span className="icon-smartphone"></span>
        <h2> Développeur Mobile</h2>
        <p>{`Création d'applications mobile sur mesure.`}</p>
        <h3>Languages parlés</h3>
        <p>React Native</p>
        <h3>Outils de développement</h3>
        <ul>
          <li>Expo</li>
        </ul>
      </div>
      <div>
        <span className="icon-database"></span>
        <h2>Développeur Back-end</h2>
        <p>Je crée également des API et base de données sur mesure.</p>
        <h3>Languages parlés</h3>
        <p>Node.js</p>
        <h3>Outils de développement</h3>
        <ul>
          <li>Express</li>
          <li>Cloudinary</li>
          <li>MongoDB</li>
          <li>Stripe</li>
        </ul>
      </div>
    </div>
  );
}
