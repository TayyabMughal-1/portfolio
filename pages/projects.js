import Head from "next/head";
import Projects from "../components/Projects";

export default function ProjectsPage() {
  return (
    <>
      <Head>
        <title>Projects | Tayyab Mughal</title>
        <meta
          name="description"
          content="SEO and digital growth projects completed by Tayyab Mughal across real estate, healthcare, ecommerce, education, and service industries."
        />
      </Head>

      <Projects />
    </>
  );
}
