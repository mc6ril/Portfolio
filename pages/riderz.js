import Layout from "../components/Layout";
import Image from "next/image";

export default function Riderz() {
  return (
    <Layout>
      <section className="riderz">
        <h1>Riderz</h1>
        <p>{`Riderz est un projet de fin de formation au Reacteur. Lucien, porteur d'idée et motard, était frustré de devoir 
        passer uniquement par Facebook pour aller se balader entre amis. L'idée de cette application a germé entre nous
        et nous avons décidé de coder ce projet fullstack !`}</p>
        {/* <p>{`Si vous possedez un téléphone Android, un lien APK est à votre disposition ci dessous. Le lien APK ne fonctionne
        devrait pas fonctionner sur Apple. Rassurez-vous, l'application est tout à fait fonctionnel sur Iphone !`}</p>
        <h4>
          <a href="https://i.diawi.com/yd63xY">Le lien</a>
        </h4> */}

        <div className="riderz-presentation">
          <div className="riderz-image">
            <Image src="/app.png" alt="image-project" quality="100" layout="fill" />
          </div>
          <div className="riderz-image">
            <Image src="/personne.png" alt="image-project" quality="100" layout="fill" />
          </div>
          <div className="riderz-image">
            <Image src="/idee.png" alt="image-project" quality="100" layout="fill" />
          </div>
          <div className="riderz-image">
            <Image src="/facebook.png" alt="image-project" quality="100" layout="fill" />
          </div>
          <div className="riderz-image">
            <Image src="/account.png" alt="image-project" quality="100" layout="fill" />
          </div>
          <div className="riderz-image">
            <Image
              src="/create-event.png"
              alt="image-project"
              quality="100"
              layout="fill"
            />
          </div>
          <div className="riderz-image">
            <Image src="/events.png" alt="image-project" quality="100" layout="fill" />
          </div>
          <div className="riderz-image">
            <Image src="/contacts.png" alt="image-project" quality="100" layout="fill" />
          </div>
        </div>
      </section>
    </Layout>
  );
}
