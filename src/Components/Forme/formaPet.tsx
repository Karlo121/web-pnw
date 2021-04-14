import React from "react";
import { StyledPredavanje } from "../../Styles/Predavanje.style";

export const formaPet: React.FC = ({}) => {
  return (
    <div>
      <StyledPredavanje>
        <h1>Text Area Form</h1>
        <form style={{ padding: "30px" }}>
          <textarea rows={30} cols={49}>
            Default tekst.
          </textarea>
        </form>
      </StyledPredavanje>
    </div>
  );
};

export default formaPet;
