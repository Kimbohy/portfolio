import face from "../images/face.png";
import FlipWordsCp from "./FlipWords";
import Header from "./Header";
import { Boxes } from "./ui/background-boxes";
import { TextHoverEffect } from "./ui/text-hover-effect";

function FirstPage() {
  return (
    <div className="h-screen relative w-full overflow-hidden bg-slate-900 flex flex-col">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <Boxes />
      <Header />
      <div className="flex">
        {/* <img
          src={face}
          alt="face"
          className="h-svh w-auto top-[40px] z-30 pointer-events-none"
        /> */}
        <p className="absolute top-96 right-72 text-white text-[6em] z-[21] pointer-events-none w-[30rem]">
          Developer
        <FlipWordsCp />
        </p>
        <TextHoverEffect text="Developer"/>
      </div>
    </div>
  );
}

export default FirstPage;
