import FlipWordsCp from "./FirstPage/FlipWords";
import Header from "./FirstPage/Header";
import { Boxes } from "./ui/background-boxes";
import { TextHoverEffect } from "./ui/text-hover-effect";

function FirstPage() {
  return (
    <div id="firstPage" className="relative flex flex-col w-full h-screen overflow-hidden bg-slate-900">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <Boxes />
      <Header />
      <div className="flex relative px-4 sm:px-0">
        <p className="absolute top-24 sm:top-48 md:top-72 lg:top-96 
          right-4 sm:right-8 md:right-36 lg:right-72 
          text-second text-2xl sm:text-3xl md:text-5xl lg:text-[6em] 
          z-[21] pointer-events-none 
          w-[calc(100%-2rem)] sm:w-full md:w-[20rem] lg:w-[30rem]
          break-words">
          Developer
          <FlipWordsCp />
        </p>
        <div className="w-full mt-12 sm:mt-0">
          <TextHoverEffect text="Developer" />
        </div>
      </div>
    </div>
  );
}

export default FirstPage;
