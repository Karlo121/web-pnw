import React from "react";
import { StyledPredavanje } from "../../Styles/Predavanje.style";

export const formaCetiri: React.FC = ({}) => {
  return (
    <StyledPredavanje>
      <form>
        <p>Kojeg ste spola?</p>
        <br></br>
        <select>
          <option>Musko</option>
          <option>Zansko</option>
        </select>
        <p>Vasa najdraza harana: </p>
        <select size={8} multiple>
          <option>govedina</option>
          <option>piletina</option>
          <option>svinjetina</option>
          <option>janjetina</option>
          <option selected>kolaci</option>
          <option>nista</option>
          <option>kolaci</option>
          <option>keksi</option>
          <option>nutela</option>
          <option>jabuke</option>
          <option>paprika</option>
        </select>
        <p>Dobar Dan</p>
      </form>
    </StyledPredavanje>
  );
};

export default formaCetiri;
