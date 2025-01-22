import FirstPage from "@/components/FirstPage";
import About from "@/components/About";
import TerminalPart from "@/components/TerminalPart";
import Contact from "@/components/Contact";
import Work from "@/components/Work";

function App() {
  return (
    <div className="bg-slate-900 overflow-x-hidden">
      <FirstPage />
      <About />
      <TerminalPart />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
