import React from "react";
import { StyledPredavanje } from "../../Styles/Predavanje.style";

export const formaTri: React.FC = ({}) => {
  return (
    <div>
      <StyledPredavanje>
        <form>
          <p>Ime:</p>
          <input size={2} type="text"></input>
          <p>Zelite li se pretplatiti na casopis?</p>
          <input type="checkbox" checked></input>
          <br></br>
          <input type="radio" name="starost"></input>
          Izmedu 0 i 5 godina
          <br></br>
          <input type="radio" name="starost"></input>
          Izmedu 5 i 15 godina
          <br></br>
          <input type="radio" name="starost"></input>
          Izmedu 15 i 25 godina
          <br></br>
          <input type="radio" name="starost"></input>
          Vise od 25
          <br></br>
        </form>
        <br></br>
        <form>
          <input type="radio" name="starost"></input>
          Izmedu 0 i 5 godina
          <br></br>
          <input type="radio" name="starost"></input>
          Izmedu 5 i 15 godina
          <br></br>
          <input type="radio" name="starost"></input>
          Izmedu 15 i 25 godina
          <br></br>
          <input type="radio" name="starost"></input>
          Vise od 25
          <br></br>
        </form>
      </StyledPredavanje>
    </div>
  );
};

export default formaTri;
