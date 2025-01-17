import Messaging from "./Contact/Messaging";
import github from "/images/icons/github2.svg";
import linkedin from "/images/icons/linkedin.svg";

function Contact() {
  return (
    <div id="contact" className="pt-20">
      <h2 className="p-3 md:p-5 text-4xl md:text-6xl text-second bg-slate-900">
        Contact
      </h2>
      <div className="flex flex-col min-h-screen bg-slate-900 pb-8">
        <Messaging />

        <div className="flex flex-col md:flex-row justify-end gap-3 p-2 md:p-5 mt-auto">
          <a
            href="https://github.com/Kimbohy"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 md:gap-3 hover:opacity-80 transition-opacity"
          >
            <img
              src={github}
              alt="Github"
              className="w-8 md:w-10 h-8 md:h-10"
            />
            <span className="text-second text-sm md:text-base">
              github.com/Kimbohy
            </span>
          </a>
          <a
            href="https://linkedin.com/in/lovatiana-rabarijaona"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 md:gap-3 hover:opacity-80 transition-opacity"
          >
            <img
              src={linkedin}
              alt="LinkedIn"
              className="w-8 md:w-10 h-8 md:h-10"
            />
            <span className="text-second text-sm md:text-base truncate">
              linkedin.com/in/lovatiana-rabarijaona
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
