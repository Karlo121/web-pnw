import React from "react";
import { StyledPredavanje } from "../Styles/Predavanje.style";
import { Link } from "react-router-dom";

const Vjezba = () => {
  return (
    <div>
      <StyledPredavanje>
        <h1> 2. Predavanje </h1>
        <Link to="/vjezba01">
          {" "}
          <p style={{ marginBottom: 30 }}>Link</p>
        </Link>
      </StyledPredavanje>
      <StyledPredavanje>
        <h1> 3. Predavanje </h1>
        <Link to="/vjezba02">
          {" "}
          <p style={{ marginBottom: 30 }}>Link</p>
        </Link>
        <h1> 3. Predavanje drugi dio </h1>
        <Link to="/vjezba02CSS">
          {" "}
          <p style={{ marginBottom: 30 }}>Link</p>
        </Link>
      </StyledPredavanje>
      <StyledPredavanje>
        <h1> 4. Predavanje</h1>
        <Link to="/vjezba04">
          {" "}
          <p style={{ marginBottom: 30 }}>Link</p>
        </Link>
      </StyledPredavanje>
      <StyledPredavanje>
        <h1> 5. Predavanje</h1>
        <Link to="/vjezba05">
          {" "}
          <p style={{ marginBottom: 30 }}>Link</p>
        </Link>
      </StyledPredavanje>
    </div>
  );
};

export default Vjezba;
