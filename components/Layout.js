import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children, page }) {
  return (
    <>
      <Head>
        <title>{page}</title>
        <link
          rel="preload"
          href="/assets/fonts/league-spartant-font/league_spartanregular.ttf"
          as="font"
          crossOrigin=""
        />
      </Head>

      <Header />
      <main className="layout">{children}</main>
      <Footer />
    </>
  );
}
