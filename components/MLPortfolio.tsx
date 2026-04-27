import FirstPage from "./FirstPage";

import dynamic from "next/dynamic";

// Lazy load components that aren't immediately visible
const About = dynamic(() => import("@/components/About"));
const Work = dynamic(() => import("@/components/Work"));
const Tech = dynamic(() => import("@/components/Tech"));
const Contact = dynamic(() => import("@/components/Contact"));

export default function MLPortfolio() {
  return (
    <div>
      <FirstPage
        showHeader={false}
        mode="ml"
        topId="top-ml"
        aboutId="about-ml"
      />
      <About mode="ml" sectionId="about-ml" />
      <Work mode="ml" sectionId="work-ml" />
      <Tech mode="ml" />
      <Contact mode="ml" sectionId="contact-ml" />
    </div>
  );
}
