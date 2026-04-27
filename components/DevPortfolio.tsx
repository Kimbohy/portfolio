import FirstPage from "./FirstPage";
import About from "./About";
import Work from "./Work";
import Tech from "./Tech";
import Contact from "./Contact";

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
