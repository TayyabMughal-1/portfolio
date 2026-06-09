import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Link as LinkIcon,
  Send,
  MessageCircle,
  CheckCircle,
  X,
  AlertCircle,
} from "lucide-react";

export default function ContactForm() {
  const [status, setStatus] = useState(null);
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/tayyabmughal486@gmail.com",
        {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
          },
        },
      );

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-16 bg-[#E0E5EC]">
      <div className="max-w-5xl mx-auto space-y-12">
        <div className="text-center space-y-2">
          <span className="badge">Contact</span>

          <h2 className="text-4xl md:text-5xl font-extrabold text-[#3D4852]">
            Get In Touch
          </h2>

          <p className="text-muted mt-4">
            Let’s discuss SEO, website growth, rankings, traffic improvement,
            and lead generation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          <div className="space-y-4">
            <Info
              icon={<Mail />}
              title="Email"
              value="tayyabmughal486@gmail.com"
              href="mailto:tayyabmughal486@gmail.com"
            />

            <Info
              icon={<LinkIcon />}
              title="LinkedIn"
              value="LinkedIn"
              href="https://www.linkedin.com/in/tayyab-mughal-818333106/"
            />

            <Info
              icon={<MapPin />}
              title="Location"
              value="New Samanabad, Lahore"
            />

            <div className="grid grid-cols-2 gap-4">
              <Info
                icon={<Phone />}
                title="Phone"
                value="Call"
                href="tel:+923209497544"
                compact
              />

              <Info
                icon={<MessageCircle />}
                title="WhatsApp"
                value="Chat"
                href="https://wa.me/923209497544"
                compact
              />
            </div>
          </div>

          <div className="relative">
            <form
              onSubmit={handleSubmit}
              className={`glass rounded-3xl p-8 space-y-4 transition ${
                status ? "blur-sm pointer-events-none" : ""
              }`}
            >
              <input
                type="hidden"
                name="_subject"
                value="New Portfolio Contact Form Submission"
              />

              <input type="hidden" name="_captcha" value="false" />

              <input type="hidden" name="_template" value="table" />

              <input
                className="w-full p-4 rounded-2xl shadow-insetDeep outline-none bg-[#E0E5EC] text-[#3D4852]"
                placeholder="Your Name"
                name="name"
                required
                onInput={(e) => {
                  e.currentTarget.value = e.currentTarget.value.replace(
                    /[^a-zA-Z0-9\s]/g,
                    "",
                  );
                }}
              />

              <input
                type="email"
                className="w-full p-4 rounded-2xl shadow-insetDeep outline-none bg-[#E0E5EC] text-[#3D4852]"
                placeholder="Your Email"
                name="email"
                required
              />

              <input
                type="tel"
                inputMode="numeric"
                pattern="[0-9]*"
                className="w-full p-4 rounded-2xl shadow-insetDeep outline-none bg-[#E0E5EC] text-[#3D4852]"
                placeholder="Phone / WhatsApp Number (Optional)"
                name="phone"
                onInput={(e) => {
                  e.currentTarget.value = e.currentTarget.value.replace(
                    /\D/g,
                    "",
                  );
                }}
              />

              <textarea
                className="w-full p-4 rounded-2xl shadow-insetDeep outline-none bg-[#E0E5EC] text-[#3D4852] h-36 resize-none"
                placeholder="Message"
                name="message"
                required
              />

              <button
                type="submit"
                disabled={sending}
                className="w-full py-4 rounded-2xl bg-violet-500 text-white font-bold hover:-translate-y-1 transition flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {sending ? "Sending..." : "Send Message"}
                <Send size={18} />
              </button>
            </form>

            {status && (
              <FormPopup type={status} onClose={() => setStatus(null)} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Info({ icon, title, value, href, compact }) {
  const content = (
    <>
      <div className="text-violet-500 shrink-0">{icon}</div>

      <div>
        <p className="font-bold text-[#3D4852]">{title}</p>
        <p className="text-muted text-sm break-all">{value}</p>
      </div>
    </>
  );

  const className = `glass rounded-2xl p-5 flex items-center gap-4 transition hover:-translate-y-1 ${
    compact ? "justify-center text-center flex-col min-h-[130px]" : ""
  }`;

  if (href) {
    return (
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        className={className}
      >
        {content}
      </a>
    );
  }

  return <div className={className}>{content}</div>;
}

function FormPopup({ type, onClose }) {
  const isSuccess = type === "success";

  return (
    <div className="absolute inset-0 z-50 rounded-3xl bg-[#E0E5EC]/90 backdrop-blur-md flex items-center justify-center p-6">
      <div className="relative w-full max-w-sm rounded-[32px] bg-[#E0E5EC] p-7 shadow-extruded text-center">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-2xl shadow-insetDeep flex items-center justify-center text-[#3D4852]"
          type="button"
        >
          <X size={17} />
        </button>

        <div className="mx-auto w-20 h-20 rounded-full shadow-insetDeep flex items-center justify-center text-violet-500">
          {isSuccess ? <CheckCircle size={42} /> : <AlertCircle size={42} />}
        </div>

        <h3 className="text-2xl font-extrabold text-[#3D4852] mt-6">
          {isSuccess
            ? "Message Sent Successfully!"
            : "Message Could Not Be Sent"}
        </h3>

        <p className="text-muted mt-3 leading-7">
          {isSuccess
            ? "Thank you for contacting me. I will review your message and get back to you soon."
            : "Please try again or contact me directly through WhatsApp or email."}
        </p>

        <button
          onClick={onClose}
          type="button"
          className="mt-7 w-full py-4 rounded-2xl bg-violet-500 text-white font-bold hover:-translate-y-1 transition"
        >
          Okay
        </button>
      </div>
    </div>
  );
}
