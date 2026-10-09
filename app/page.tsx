import Header from "@/components/FirstPage/Header";
import HashSync from "@/components/HashSync";
import ModeScene from "@/components/ModeScene";
import PortfolioSections from "@/components/PortfolioSections";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Header />
      <ModeScene
        dev={<PortfolioSections mode="dev" />}
        ml={<PortfolioSections mode="ml" />}
      />
      <HashSync />
    </main>
  );
}
