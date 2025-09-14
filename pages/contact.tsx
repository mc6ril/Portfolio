import React, { useState, useEffect, useContext } from "react";
import Header from "../components/Header";
import Image from "next/image";
import emailjs from "@emailjs/browser";
import { motion } from "motion/react";
import { traduction } from "../assets/data/lang";
import { Context } from "../components/context/LangContext";
import { Notyf } from "notyf";
import Head from "next/head";

interface ContactFormState {
    name: string;
    email: string;
    description: string;
}

export default function Contact(): React.JSX.Element {
    const [notyf, setNotyf] = useState<Notyf | null>(null);
    const { lang } = useContext(Context);
    const [form, setForm] = useState<ContactFormState>({
        name: "",
        email: "",
        description: "",
    });

    const onHandleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();

        // Vérification des champs requis
        if (!form.name || !form.email || !form.description) {
            notyf?.error({ message: `${traduction[lang].contact.emptyForm}`, duration: 3000 });
            return;
        }

        try {
            // Configuration EmailJS - Remplacez ces valeurs par vos propres clés
            const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string;
            const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string;
            const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string;

            const templateParams = {
                name: form.name, // Pour {{name}} dans le template
                email: form.email, // Pour {{email}} dans Reply To
                message: form.description, // Pour {{message}} dans le template
                title: "Portfolio Cyril Lesot", // Pour {{title}} dans le sujet
                time: new Date().toLocaleString("fr-FR"), // Pour {{time}} dans le template
            };

            const response = await emailjs.send(serviceId, templateId, templateParams, publicKey);

            if (response.status === 200) {
                notyf?.success({ message: `${traduction[lang].contact.sucessMessage}`, duration: 3000 });
                // Réinitialiser le formulaire après envoi réussi
                setForm({
                    name: "",
                    email: "",
                    description: "",
                });
            }
        } catch (error) {
            console.error("Erreur lors de l'envoi de l'email:", error);
            notyf?.error({ message: `${traduction[lang].contact.errorMessage}`, duration: 3000 });
        }
    };

    //motion
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,

            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const item = {
        hidden: { y: 200 },
        show: { y: 0 },
    };
    const animatedImage = {
        hidden: { scale: 0 },
        show: { scale: 1 },
        exit: { scale: 0 },
    };

    useEffect(() => {
        const newNotyf = new Notyf({
            duration: 3000,
        });
        setNotyf(newNotyf);
    }, []);

    return (
        <motion.section className="contact layout" variants={container} initial="hidden" animate="show">
            <Head>
                <meta name="google-site-verification" content="_rX4UrBTq40RyUQxfSe51DRs4CYurT6uJZJlsPX0MA4" />
                <meta name="description" content="Portfolio de Cyril Lesot, Web Developpeur front-end et mobile"></meta>
                <title>{"Portfolio Cyril Lesot, developpeur front-end et mobile - contact"}</title>
            </Head>
            <Header />

            <motion.h1 variants={item} transition={{ ease: "easeOut", duration: 0.7 }}>
                {traduction[lang].contact.title}
            </motion.h1>
            <motion.div className="profil-picture" variants={animatedImage} transition={{ ease: "easeOut", duration: 0.6 }}>
                <Image src="/images/profil.png" alt="Mon image de profil sur la page contact" width="250" height="250" />{" "}
            </motion.div>

            <form className="contact-form" onSubmit={onHandleSubmit}>
                <div className="first-inputs">
                    <div className="control">
                        <label htmlFor="name">{traduction[lang].contact.name}</label>
                        <input type="text" name="name" id="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.currentTarget.value })} />
                    </div>
                    <div className="control">
                        <label htmlFor="email">{traduction[lang].contact.email}</label>
                        <input type="email" name="email" id="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.currentTarget.value })} />
                    </div>
                </div>
                <div>
                    <div className="control">
                        <label htmlFor="message">{traduction[lang].contact.message}</label>
                        <textarea name="message" id="message" rows={5} value={form.description} onChange={(e) => setForm({ ...form, description: e.currentTarget.value })}></textarea>
                    </div>
                </div>

                <input type="submit" value={`${traduction[lang].contact.button}`} />
            </form>
        </motion.section>
    );
}
