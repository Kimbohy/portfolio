import About from "./assets/components/About";
import Contact from "./assets/components/Contact";
import FirstPage from "./assets/components/FirstPage";
import TerminalPart from "./assets/components/TerminalPart";
import Work from "./assets/components/Work";

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
