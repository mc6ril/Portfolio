export default function HardSkills() {
  return (
    <div className="hard-skills">
      <div>
        <span className="icon-code"></span>
        <h3> Développeur Front-end</h3>
        <p>
          {`J'aime coder des projets FromScratch, ou apporter de nouvelles idées à des
        projets existants.`}
        </p>
        <h4>Languages parlés</h4>
        <p>HTML, CSS, JavaScript, React, Redux, Next.js, Typescript</p>
        <h4>Outils de développement</h4>
        <ul>
          <li>Github</li>
          <li>Terminal</li>
          <li>Codepen</li>
          <li>Figma</li>
        </ul>
      </div>
      <div>
        <span className="icon-smartphone"></span>
        <h3> Développeur Mobile</h3>
        <p>{`Création d'applications mobile sur mesure.`}</p>
        <h4>Languages parlés</h4>
        <p>React Native</p>
        <h4>Outils de développement</h4>
        <ul>
          <li>Expo</li>
        </ul>
      </div>
      <div>
        <span className="icon-database"></span>
        <h3>Développeur Back-end</h3>
        <p>Je crée également des API et base de données sur mesure.</p>
        <h4>Languages parlés</h4>
        <p>Node.js</p>
        <h4>Outils de développement</h4>
        <ul>
          <li>Express</li>
          <li>Cloudinary</li>
          <li>MongoDB</li>
          <li>Stripe</li>
          <li>Postman</li>
          <li>Mailgun</li>
        </ul>
      </div>
    </div>
  );
}
