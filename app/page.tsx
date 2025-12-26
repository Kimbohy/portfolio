import FirstPage from "@/components/FirstPage";
import About from "@/components/About";
// import TerminalPart from "@/components/TerminalPart";
import Contact from "@/components/Contact";
import Work from "@/components/Work";
import Tech from "@/components/Tech";

function App() {
  return (
    <div className="bg-background overflow-x-hidden">
      <FirstPage />
      <About />
      <Work />
      <Tech />
      {/* <TerminalPart /> */}
      <Contact />
    </div>
  );
}

export default App;
