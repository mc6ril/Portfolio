import Layout from "../components/Layout";
import Image from "next/image";
import { traduction } from "../assets/data/lang";
import { Context } from "../components/context/LangContext";
import { useContext } from "react";

export default function Riderz() {
  const { lang } = useContext(Context);
  return (
    <Layout>
      <section className='riderz' page={`Portfolio Cyril Lesot, developpeur front-end et mobile - riderz`}>
        <h1>Riderz</h1>
        <p>{traduction[lang].riderz.presentation}</p>

        <div className='riderz-presentation'>
          <div className='riderz-image'>
            <Image src='/images/app.png' alt="Visuel de l'application mobile Riderz" quality='100' layout='fill' />
          </div>
          <div className='riderz-image'>
            <Image src='/images/personne.png' alt="L'équipe du projet de l'application mobile Riderz" quality='100' layout='fill' />
          </div>
          <div className='riderz-image'>
            <Image src='/images/idee.png' alt='Speech rapide du projet avec un visuel fort de moto' quality='100' layout='fill' />
          </div>
          <div className='riderz-image'>
            <Image src='/images/facebook.png' alt='Possibilité de connecté Riderz directement à Facebook' quality='100' layout='fill' />
          </div>
          <div className='riderz-image'>
            <Image src='/images/account.png' alt='Creation de compte Riderz facile' quality='100' layout='fill' />
          </div>
          <div className='riderz-image'>
            <Image src='/images/create-event.png' alt="Creation d'évènement depuis l'application Riderz" quality='100' layout='fill' />
          </div>
          <div className='riderz-image'>
            <Image src='/images/events.png' alt="Explorez les évènements depuis l'application de manière intuitive" quality='100' layout='fill' />
          </div>
          <div className='riderz-image'>
            <Image src='/images/contacts.png' alt='Gestion des contacts et de ses amis' quality='100' layout='fill' />
          </div>
        </div>
      </section>
    </Layout>
  );
}
