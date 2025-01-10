import Messaging from "./Contact/Messaging";
import github from "../images/icons/github2.svg";
import linkedin from "../images/icons/linkedin.svg";

function Contact(){
  return (
    <>
      <h2 className="p-5 text-6xl text-second bg-slate-900">Contact</h2>
      <div className="flex flex-col h-screen bg-slate-900 ">

        <Messaging />

        <div className="flex justify-end gap-5 p-10" onClick={() => {}}>
          <div className="flex items-center gap-5 flex-nowrap">
            <img src={github} alt="Github" className="w-14 h-14" />
            <samp className="text-second text-24l">github.com/Kimbohy</samp>
          </div>
          <div className="flex items-center gap-5 flex-nowrap" onClick={() => {}}>
            <img src={linkedin} alt="Github" className="w-14 h-14" />
            <samp className="text-second text-24l">
              linkedin.com/in/lovatiana-rabarijaona
            </samp>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
