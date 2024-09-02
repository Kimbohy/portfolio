import { useState, useEffect } from "react";
import FirstPage from "./assets/components/FirstPage";
import Cursus from "./assets/components/Cursus";
import Work from "./assets/components/Work";
import Loading from "./assets/components/Loading";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <>
      {loading && <Loading />}
      <FirstPage />
      <Cursus />
      <Work />
    </>
  );
}

export default App;
