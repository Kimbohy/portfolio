import FirstPage from "@/components/FirstPage";
import dynamic from "next/dynamic";

// Lazy load components that aren't immediately visible
const About = dynamic(() => import("@/components/About"));
const Work = dynamic(() => import("@/components/Work"));
const Tech = dynamic(() => import("@/components/Tech"));
const Contact = dynamic(() => import("@/components/Contact"));
// const TerminalPart = dynamic(() => import("@/components/TerminalPart"));

function App() {
  return (
    <div className="bg-background overflow-x-hidden">
      <FirstPage />
      {/* <TerminalPart /> */}
      <About />
      <Work />
      <Tech />
      <Contact />
    </div>
  );
}

export default App;
