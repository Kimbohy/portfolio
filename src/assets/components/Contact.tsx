import Messaging from "./Contact/Messaging";
import github from "../images/icons/github2.svg";
import linkedin from "../images/icons/linkedin.svg";

function Contact() {
  return (
    <div id="contact">
      <h2 className="p-3 md:p-5 text-4xl md:text-6xl text-second bg-slate-900">Contact</h2>
      <div className="flex flex-col min-h-screen bg-slate-900 pb-8">
        <Messaging />

        <div className="flex flex-col md:flex-row justify-end gap-5 p-4 md:p-10 mt-auto">
          <a 
            href="https://github.com/Kimbohy" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-3 md:gap-5 hover:opacity-80 transition-opacity"
          >
            <img src={github} alt="Github" className="w-10 md:w-14 h-10 md:h-14" />
            <span className="text-second text-base md:text-2xl">github.com/Kimbohy</span>
          </a>
          <a 
            href="https://linkedin.com/in/lovatiana-rabarijaona" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-3 md:gap-5 hover:opacity-80 transition-opacity"
          >
            <img src={linkedin} alt="LinkedIn" className="w-10 md:w-14 h-10 md:h-14" />
            <span className="text-second text-base md:text-2xl truncate">
              linkedin.com/in/lovatiana-rabarijaona
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
