import cards_tor from "../images/cards-tor/cards_tor1.png";
import cards_tor2 from "../images/cards-tor/cards_tor2.png";
import cards_tor3 from "../images/cards-tor/cards_tor3.png";
import cards_tor4 from "../images/cards-tor/cards_tor4.png";
import sunnside1 from "../images/sunnyside/sunnyside1.png";
import sunnside2 from "../images/sunnyside/sunnyside2.png";
import sunnside3 from "../images/sunnyside/sunnyside3.png";
import sunnside4 from "../images/sunnyside/sunnyside4.png";
import smb1 from "../images/sama_web_UI/smb1.png";
import smb2 from "../images/sama_web_UI/smb2.png";
import smb3 from "../images/sama_web_UI/smb3.png";

import WorkCard from "./Work/WorkCard";

function Work() {
  return (
    <>
      <h2 className="p-5 text-6xl text-second bg-slate-900">Work</h2>
      <div className="flex flex-col gap-24 bg-slate-900 h-max">
        <WorkCard
          title="Cards-tor"
          description=" Card market place"
          images={[cards_tor, cards_tor2, cards_tor3, cards_tor4]}
          tech={["html", "css", "react"]}
        />
        <WorkCard
          title="Sunnyside"
          description=" "
          images={[sunnside1, sunnside2, sunnside3, sunnside4]}
          tech={["html", "css", "javascript"]}
        />
        <WorkCard
          title="Samba-web-UI"
          description=" A web UI for samba user management"
          images={[smb1, smb2, smb3]}
          tech={["html", "css", "react", "php", "mysql", "bash"]}
        />
      </div>
    </>
  );
}

export default Work;
