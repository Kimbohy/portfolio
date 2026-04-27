import FirstPage from "./FirstPage";
import About from "./About";
import Work from "./Work";
import Tech from "./Tech";
import Contact from "./Contact";

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
