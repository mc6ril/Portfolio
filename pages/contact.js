import Header from "../components/Header";
import Image from "next/image";

export default function Contact() {
  return (
    <section className="contact layout">
      <Header />

      <h1>{`Merci de prendre le temps de me contacter. Comment puis-je vous aider aujourd'hui ?`}</h1>
      <div className="profil-picture">
        <Image
          src="/profil2.jpg"
          alt="my-profile"
          width="250"
          height="250"
          quality={100}
        />
      </div>

      <form className="contact-form">
        <div className="first-inputs">
          <div className="control">
            <label htmlFor="name">Nom</label>
            <input type="text" id="name" required />
          </div>
          <div className="control">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" required />
          </div>
        </div>
        <div>
          <div className="control">
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" rows="5" required></textarea>
          </div>
        </div>

        <input type="submit" value="Envoyer" />
      </form>
    </section>
  );
}
