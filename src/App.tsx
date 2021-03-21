import Header from "./Components/Header";
import Predavanje from "./Components/Predavanje";
import { linkoviPredavanja } from "./Data/Links";
import { pdfovi } from "./Data/Pdf";

import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Predavanje broj={1} link={linkoviPredavanja.link1} pdf={pdfovi.src1} />
    </>
  );
}

export default App;
