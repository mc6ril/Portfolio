import React, { useContext } from "react";
import Layout from "../components/Layout";
import Image from "next/image";
import { traduction } from "../assets/data/lang";
import { Context } from "../components/context/LangContext";

export default function Riderz(): React.JSX.Element {
    const { lang } = useContext(Context);
    return (
        <Layout>
            <section className="riderz">
                <h1>Riderz</h1>
                <p>{traduction[lang].riderz.presentation}</p>

                <div className="riderz-presentation">
                    <div className="riderz-image">
                        <Image src="/images/app.png" alt="Visuel de l'application mobile Riderz" width={300} height={200} />
                    </div>
                    <div className="riderz-image">
                        <Image src="/images/personne.png" alt="L'équipe du projet de l'application mobile Riderz" width={300} height={200} />
                    </div>
                    <div className="riderz-image">
                        <Image src="/images/idee.png" alt="Speech rapide du projet avec un visuel fort de moto" width={300} height={200} />
                    </div>
                    <div className="riderz-image">
                        <Image src="/images/facebook.png" alt="Possibilité de connecté Riderz directement à Facebook" width={300} height={200} />
                    </div>
                    <div className="riderz-image">
                        <Image src="/images/account.png" alt="Creation de compte Riderz facile" width={300} height={200} />
                    </div>
                    <div className="riderz-image">
                        <Image src="/images/create-event.png" alt="Creation d'évènement depuis l'application Riderz" width={300} height={200} />
                    </div>
                    <div className="riderz-image">
                        <Image src="/images/events.png" alt="Explorez les évènements depuis l'application de manière intuitive" width={300} height={200} />
                    </div>
                    <div className="riderz-image">
                        <Image src="/images/contacts.png" alt="Gestion des contacts et de ses amis" width={300} height={200} />
                    </div>
                </div>
            </section>
        </Layout>
    );
}
