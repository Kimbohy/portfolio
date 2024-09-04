import Messaging from "./Messaging";
import github from "../images/icons/github2.svg";
import linkedin from "../images/icons/linkedin.svg";

function Contact(){
  return (
    <>
      <h2 className="text-second text-6xl p-5 bg-slate-900">Contact</h2>
      <div className="bg-slate-900 h-screen flex flex-col ">

        <Messaging />

        <div className="flex justify-end gap-5 p-10" onClick={() => {}}>
          <div className="flex flex-nowrap items-center gap-5">
            <img src={github} alt="Github" className="w-14 h-14" />
            <samp className="text-second text-24l">github.com/Kimbohy</samp>
          </div>
          <div className="flex flex-nowrap items-center gap-5" onClick={() => {}}>
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
