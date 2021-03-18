import Header from "./Components/Header";
import Predavanje from "./Components/Predavanje";
import { StyledPage } from "./Styles/Global.style";

import "./App.css";

function App() {
  return (
    <StyledPage>
      <Header />
      <Predavanje />
    </StyledPage>
  );
}

export default App;
