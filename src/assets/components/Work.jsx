import { motion } from "framer-motion";
import cards_tor from "../images/cards-tor/cards_tor1.png";
import WorkCard from "./WorkCard";

function Work() {
  return (
    <div className="bg-slate-900">
        <h2 className="text-white text-6xl p-5">Work</h2>
        <WorkCard title="Cards-tor" description=" Card market place" image={cards_tor} tech={["css","html","react"]} />
    </div>
  );
}

export default Work;