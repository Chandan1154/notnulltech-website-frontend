import ContactForm from "../components/ContactForm";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <h1 className="mb-10 text-center text-5xl font-bold">
        Contact Us
      </h1>

      <div className="grid gap-12 lg:grid-cols-2">
        <ContactForm />

        <div>
          <h2 className="mb-6 text-3xl font-semibold">
            Lets Connect
          </h2>

          <div className="space-y-5">
            <a
              href="https://linkedin.com/company/notnulltech"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3"
            >
                <FaLinkedin style={{ fontSize: "1.5rem" }} />
              LinkedIn
            </a>

            <a
              href="https://github.com/notnulltech"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3"
            >
              <FaGithub  style={{ fontSize: "1.5rem" }}/>
              GitHub
            </a>

            <a
              href="mailto:hello@notnulltech.com"
              className="flex items-center gap-3"
            >
              <Mail />
              hello@notnulltech.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}