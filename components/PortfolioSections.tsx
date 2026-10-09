import About from "@/components/About";
import Contact from "@/components/Contact";
import FirstPage from "@/components/FirstPage";
import Tech from "@/components/Tech";
import Work from "@/components/Work";
import type { Mode } from "@/context/PortfolioMode";

/** Les sections du mode ML ont le même id suffixé par "-ml" (ex: #about-ml). */
function sectionIds(mode: Mode) {
  const suffix = mode === "ml" ? "-ml" : "";
  return {
    top: `top${suffix}`,
    about: `about${suffix}`,
    work: `work${suffix}`,
    contact: `contact${suffix}`,
  };
}

export default function PortfolioSections({ mode }: { mode: Mode }) {
  const ids = sectionIds(mode);

  return (
    <div>
      <FirstPage
        showHeader={false}
        mode={mode}
        topId={ids.top}
        aboutId={ids.about}
      />
      <About mode={mode} sectionId={ids.about} />
      <Work mode={mode} sectionId={ids.work} />
      <Tech mode={mode} />
      <Contact mode={mode} sectionId={ids.contact} />
    </div>
  );
}
