import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children, page }) {
  return (
    <div>
      <Head>
        <title>{page}</title>
      </Head>
      <Header />
      <main className="layout">{children}</main>
      <Footer />
    </div>
  );
}
