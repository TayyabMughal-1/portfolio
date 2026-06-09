import Head from "next/head";
import ContactForm from "../components/ContactForm";

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact | Tayyab Mughal</title>
        <meta
          name="description"
          content="Contact Tayyab Mughal for SEO projects, website growth, digital marketing, and organic traffic improvement."
        />
      </Head>

      <ContactForm />
    </>
  );
}
