import Head from "next/head";
import Projects from "../components/Projects";
import Analytics from "../components/Analytics";

export default function CaseStudiesPage() {
  return (
    <>
      <Head>
        <title>Case Studies | Tayyab Mughal</title>
        <meta
          name="description"
          content="SEO case studies, project results, traffic growth, keyword improvements, and lead generation examples."
        />
      </Head>

      <Projects />
      <Analytics />
    </>
  );
}
