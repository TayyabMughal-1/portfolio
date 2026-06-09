import Head from "next/head";
import Experience from "../components/Experience";

export default function ExperiencePage() {
  return (
    <>
      <Head>
        <title>Experience | Tayyab Mughal</title>
        <meta
          name="description"
          content="Work experience of Tayyab Mughal as a Senior SEO Expert and Digital Growth Strategist."
        />
      </Head>

      <Experience />
    </>
  );
}
