import FirstPage from "@/components/FirstPage";
import dynamic from "next/dynamic";

// Lazy load components that aren't immediately visible
const About = dynamic(() => import("@/components/About"));
const Work = dynamic(() => import("@/components/Work"));
const Tech = dynamic(() => import("@/components/Tech"));
const Contact = dynamic(() => import("@/components/Contact"));

export default function DevPortfolio() {
  return (
    <div>
      <FirstPage showHeader={false} mode="dev" topId="top" aboutId="about" />
      <About mode="dev" sectionId="about" />
      <Work mode="dev" sectionId="work" />
      <Tech mode="dev" />
      <Contact mode="dev" sectionId="contact" />
    </div>
  );
}
