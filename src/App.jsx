import { useState, useEffect } from "react";
import FirstPage from "./assets/components/FirstPage";
import Cursus from "./assets/components/Cursus";
import Work from "./assets/components/Work";
import Loading from "./assets/components/Loading";
import Contact from "./assets/components/Contact";
import Tech from "./assets/components/Tech";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 0);
  }, []);

  return (
    <>
      {loading ? <Loading /> : <FirstPage />}
      <Cursus />
      <Work />
      <Tech />
      <Contact />
    </>
  );
}

export default App;
