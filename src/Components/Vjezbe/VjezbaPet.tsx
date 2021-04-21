import React from "react";
import { StyledPredavanje } from "../../Styles/Predavanje.style";
import sretno from "../../Styles/images/sretno.gif";
import tuzno from "../../Styles/images/tuzno.gif";

interface VjezbaPetProps {}

const VjezbaPet: React.FC<VjezbaPetProps> = ({}) => {
  return (
    <div>
      <StyledPredavanje style={{ paddingBottom: 20 }}>
        <h1>Primjer DIV 1</h1>
        1Ovaj tekst je izvan DIV elementa.
        <br />
        1Ovaj tekst je izvan DIV elementa.
        <br />
        1Ovaj tekst je izvan DIV elementa.
        <br />
        <div id="prvi" style={{ position: "relative", top: 50, left: 200 }}>
          Ovaj tekst je unutar DIV elementa.
          <br />
          Ovaj tekst je unutar DIV elementa.
          <br />
        </div>
        2Ovaj tekst je izvan DIV elementa.
        <br />
        2Ovaj tekst je izvan DIV elementa.
        <br />
        2Ovaj tekst je izvan DIV elementa.
        <br />
      </StyledPredavanje>
      <StyledPredavanje style={{ paddingBottom: 20 }}>
        <h1>Primjer DIV 2</h1>
        1Ovaj tekst je izvan DIV elementa.
        <br />
        1Ovaj tekst je izvan DIV elementa.
        <br />
        1Ovaj tekst je izvan DIV elementa.
        <br />
        <div
          id="prvi"
          style={{
            position: "absolute",
            top: 350,
            left: 50,
            visibility: "visible",
          }}
        >
          Ovaj tekst je unutar DIV elementa.
          <br />
          Ovaj tekst je unutar DIV elementa.
          <br />
        </div>
        2Ovaj tekst je izvan DIV elementa.
        <br />
        2Ovaj tekst je izvan DIV elementa.
        <br />
        2Ovaj tekst je izvan DIV elementa.
        <br />
      </StyledPredavanje>
      <StyledPredavanje style={{ paddingBottom: 20, height: 200 }}>
        <h1>Primjer DIV 3</h1>
        <div
          id="tekst"
          style={{ position: "absolute", top: 630, left: 400, zIndex: -4 }}
        >
          Puno teksta. Puno teksta.
        </div>
        <div
          id="sretan"
          style={{ position: "absolute", top: 630, left: 400, zIndex: 1 }}
        >
          <img src={sretno} />
        </div>
        <div id="tuzan" style={{ position: "absolute", top: 630, left: 400 }}>
          <img src={tuzno} />
        </div>
      </StyledPredavanje>
    </div>
  );
};

export default VjezbaPet;
