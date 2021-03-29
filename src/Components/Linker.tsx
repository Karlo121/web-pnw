import React from "react";
import { StyledPredavanje } from "../Styles/Predavanje.style";
import { Link } from "react-router-dom";

const Vjezba = () => {
  return (
    <StyledPredavanje>
      <h1> 2. Predavanje </h1>
      <Link to="/vjezba01">
        {" "}
        <p style={{ marginBottom: 30 }}>Link</p>
      </Link>
    </StyledPredavanje>
  );
};

export default Vjezba;
