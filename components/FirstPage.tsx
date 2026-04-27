import FlipWordsCp from "./FirstPage/FlipWords";
import Header from "./FirstPage/Header";
import { TextHoverEffect } from "./ui/text-hover-effect";
import ScrollButton from "./FirstPage/ScrollButton";

interface FirstPageProps {
  mode?: "dev" | "ml";
  showHeader?: boolean;
  topId?: string;
  aboutId?: string;
}

function FirstPage({
  mode = "dev",
  showHeader = true,
  topId = "top",
  aboutId = "about",
}: FirstPageProps) {
  const title = mode === "ml" ? "ML Engineer" : "Developer";

  return (
    <div
      id={topId}
      className="relative flex flex-col w-full h-screen overflow-hidden bg-background"
    >
      <div className="absolute inset-0 w-full h-full bg-background z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      {showHeader && <Header />}
      <div className="flex flex-col h-full justify-center relative px-4 sm:px-0">
        <div
          className="absolute 
          top-[30vh] sm:top-[40vh] md:top-[40vh] lg:top-[50vh]
          right-4 sm:right-8 md:right-36 lg:right-72 
          text-secondary text-2xl sm:text-3xl md:text-5xl lg:text-[6em] 
          z-[21] pointer-events-none 
          w-[calc(100%-2rem)] sm:w-full md:w-[20rem] lg:w-[30rem]
          min-h-[60px] md:min-h-[100px]
          break-words"
        >
          <span className="hidden md:inline-block">{title}</span>
          <FlipWordsCp mode={mode} />
        </div>
        <div className="w-full mt-[15vh] sm:mt-0">
          <TextHoverEffect text={title} />
        </div>
        <ScrollButton targetId={aboutId} />
      </div>
    </div>
  );
}

export default FirstPage;
