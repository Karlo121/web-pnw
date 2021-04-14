import React from "react";
import { Link } from "react-router-dom";
import { StyledPredavanje } from "../../Styles/Predavanje.style";

const VjezbaFour: React.FC = ({}) => {
  return (
    <div>
      <StyledPredavanje>
        <h1>Prva Forma</h1>
        <Link to="/forma01">
          {" "}
          <p style={{ marginBottom: 30 }}>Link</p>
        </Link>
      </StyledPredavanje>
      <StyledPredavanje>
        <h1>Druga Forma</h1>
        <Link to="/forma02">
          {" "}
          <p style={{ marginBottom: 30 }}>Link</p>
        </Link>
      </StyledPredavanje>
      <StyledPredavanje>
        <h1>Treca Forma</h1>
        <Link to="/forma03">
          {" "}
          <p style={{ marginBottom: 30 }}>Link</p>
        </Link>
      </StyledPredavanje>
      <StyledPredavanje>
        <h1>Cetvrta Forma</h1>
        <Link to="/forma04">
          {" "}
          <p style={{ marginBottom: 30 }}>Link</p>
        </Link>
      </StyledPredavanje>
      <StyledPredavanje>
        <h1>Peta Forma</h1>
        <Link to="/forma05">
          {" "}
          <p style={{ marginBottom: 30 }}>Link</p>
        </Link>
      </StyledPredavanje>
    </div>
  );
};

export default VjezbaFour;
