import Header from "./Header";
import Predavanje from "./Predavanje";
import { linkoviPredavanja } from "../Data/Links";
import { pdfovi } from "../Data/Pdf";
import Linker from "./Linker";

const Home = () => {
  return (
    <>
      <Header />
      <Predavanje broj={1} link={linkoviPredavanja.link1} pdf={pdfovi.src1} />
      <Linker />
    </>
  );
};

export default Home;
