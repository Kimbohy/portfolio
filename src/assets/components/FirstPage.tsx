import FlipWordsCp from "./FirstPage/FlipWords";
import Header from "./FirstPage/Header";
// import { Boxes } from "./ui/background-boxes";
import { TextHoverEffect } from "./ui/text-hover-effect";
import ScrollButton from "./FirstPage/ScrollButton"; // Import the new component

function FirstPage() {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div
      id="top"
      className="relative flex flex-col w-full h-screen overflow-hidden bg-slate-900"
    >
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      {/* <Boxes /> */}
      <Header />
      <div className="flex flex-col h-full justify-center relative px-4 sm:px-0">
        <p
          className="absolute 
          top-[30vh] sm:top-[40vh] md:top-[40vh] lg:top-[50vh]
          right-4 sm:right-8 md:right-36 lg:right-72 
          text-second text-2xl sm:text-3xl md:text-5xl lg:text-[6em] 
          z-[21] pointer-events-none 
          w-[calc(100%-2rem)] sm:w-full md:w-[20rem] lg:w-[30rem]
          min-h-[60px] md:min-h-[100px]
          break-words"
        >
          <span className="hidden md:inline-block">
            Developer
          </span>
          <FlipWordsCp />
        </p>
        <div className="w-full mt-[15vh] sm:mt-0">
          <TextHoverEffect text="Developer" />
        </div>
        <ScrollButton onClick={scrollToAbout} /> 
      </div>
    </div>
  );
}

export default FirstPage;
