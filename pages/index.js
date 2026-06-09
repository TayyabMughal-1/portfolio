import Head from "next/head";
import Hero from "../components/Hero";
import Skills from "../components/Skills";

export default function Home() {
  return (
    <>
      <Head>
        <title>Tayyab Mughal | Senior SEO Expert</title>
        <meta
          name="description"
          content="Portfolio of Tayyab Mughal, Senior SEO Expert and Digital Growth Strategist."
        />
      </Head>

      <Hero />
      <Skills />
    </>
  );
}
