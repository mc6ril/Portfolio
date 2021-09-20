import Header from "../components/Header";
import Image from "next/image";
import axios from "axios";
import { useState } from "react";

export default function Contact() {
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");

  console.log(message);

  const onHandleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `https://portfolio-cyril-lesot.herokuapp.com/form`,
        {
          name: name,
          email: email,
          description: description,
        }
      );
      if (response.status === 200) {
        setMessage("Email envoyé avec succés");
      }
    } catch (error) {
      setMessage("Une erreur est survenue. Veuillez réessayer.");
    }
  };

  return (
    <section className="contact layout">
      <Header />

      <h1>{`Merci de prendre le temps de me contacter. Comment puis-je vous aider ?`}</h1>
      <div className="profil-picture">
        <Image
          src="/profil.png"
          alt="my-profile"
          width="250"
          height="250"
          quality={100}
        />
      </div>

      <form className="contact-form" onSubmit={onHandleSubmit}>
        <div className="first-inputs">
          <div className="control">
            <label htmlFor="name">Nom</label>
            <input
              type="text"
              id="name"
              required
              onChange={(e) => setName(e.currentTarget.value)}
            />
          </div>
          <div className="control">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              required
              onChange={(e) => setEmail(e.currentTarget.value)}
            />
          </div>
        </div>
        <div>
          <div className="control">
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              rows="5"
              required
              onChange={(e) => setDescription(e.currentTarget.value)}
            ></textarea>
          </div>
          {message && <p>{message}</p>}
        </div>

        <input type="submit" value="Envoyer" />
      </form>
    </section>
  );
}
