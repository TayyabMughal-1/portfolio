import { Mail, Phone, MapPin, Link } from "lucide-react";

export default function ContactForm() {
  return (
    <section id="contact" className="py-24 px-6 md:px-16 bg-[#E0E5EC]">
      <div className="max-w-5xl mx-auto space-y-12">
        <div className="text-center space-y-2">
          <span className="text-violet-500 uppercase tracking-widest text-xs font-bold">
            Contact
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold">Get In Touch</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          <div className="space-y-4">
            <Info
              icon={<Mail />}
              title="Email"
              value="tayyabmughal486@gmail.com"
            />
            <Info icon={<Phone />} title="Phone" value="0320 9497544" />
            <Info
              icon={<MapPin />}
              title="Location"
              value="New Samanabad, Lahore"
            />
            <Info
              icon={<Link />}
              title="LinkedIn"
              value="linkedin.com/in/tayyab-mughal-818333106"
            />
          </div>

          <form className="glass rounded-3xl p-8 space-y-4 grid grid-cols-1 gap-4">
            <input
              className="w-full p-4 rounded-2xl shadow-insetDeep outline-none"
              placeholder="Your Name"
            />
            <input
              className="w-full p-4 rounded-2xl shadow-insetDeep outline-none"
              placeholder="Your Email"
            />
            <textarea
              className="w-full p-4 rounded-2xl shadow-insetDeep outline-none h-36"
              placeholder="Message"
            />
            <button
              type="submit"
              className="w-full py-4 rounded-2xl bg-violet-500 text-white font-bold hover:opacity-90 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Info({ icon, title, value }) {
  return (
    <div className="glass rounded-2xl p-5 flex items-center gap-4 shadow-insetDeep">
      <div className="text-violet-500">{icon}</div>
      <div>
        <p className="font-bold">{title}</p>
        <p className="text-muted text-sm break-all">{value}</p>
      </div>
    </div>
  );
}
