import FlipWordsCp from "./FirstPage/FlipWords";
import Header from "./FirstPage/Header";
import { Boxes } from "./ui/background-boxes";
import { TextHoverEffect } from "./ui/text-hover-effect";

function FirstPage() {
  return (
    <div className="relative flex flex-col w-full h-screen overflow-hidden bg-slate-900">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <Boxes />
      <Header />
      <div className="flex">
        <p className="absolute top-96 right-72 text-second text-[6em] z-[21] pointer-events-none w-[30rem]">
          Developer
          <FlipWordsCp />
        </p>
        <TextHoverEffect text="Developer" />
      </div>
    </div>
  );
}

export default FirstPage;
