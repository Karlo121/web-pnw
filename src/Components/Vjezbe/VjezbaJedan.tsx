import React from "react";
import { Link } from "react-router-dom";
import { StyledVjezba } from "../../Styles/Vjezba.style";

const stil1 = {
  fontSize: "24pt",
  color: "silver",
  fontFamily: "FSTimesRom",
};

const stil2 = {
  fontSize: "12pt",
  color: "yellow",
  fontFamily: "FSTimesRom",
};

const stil3 = {
  fontSize: "32pt",
  color: "navy",
  fontFamily: "FSTimesRom",
};

const VjezbaJedan = () => {
  return (
    <div>
      <StyledVjezba
        style={{
          backgroundColor: "rgb(128, 0, 128)",
          color: "rgb(255, 255, 0)",
        }}
      >
        <h1>Vjezba 1</h1>
        <h2>manipuliranje tekstom</h2>
        <p style={{ fontSize: 15 }}>small</p>
        <p style={{ fontSize: 40 }}>big</p>
        <p>
          Primjer <b>Bolda</b>
        </p>
        <p>
          Primjer <i>kurziva</i>
        </p>
        <p>
          Primjer superskripte:<sup> sup</sup>
        </p>
        <p>
          Primjer subskripte:<sub> sub</sub>
        </p>
      </StyledVjezba>

      <StyledVjezba
        style={{
          backgroundColor: "red",
        }}
      >
        <h1>Vjezba 2</h1>
        <h2>Stilovi</h2>
        <div style={stil1}>Ovo je odlomak za testiranje Stila1.</div>

        <p style={stil2}>Ovo je odlomak za testiranje Stila2.</p>

        <p style={stil3}>Opet igranje sa Stilom3.</p>

        <p style={stil2}>Opet igranje sa Stilom2.</p>
      </StyledVjezba>
      <Link to="/">Home</Link>
    </div>
  );
};

export default VjezbaJedan;
