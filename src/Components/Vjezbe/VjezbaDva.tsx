import React from "react";
import { StyledDruga } from "../../Styles/VjezbaDva.style";

interface VjezbaDvaProps {}

export const VjezbaDva: React.FC<VjezbaDvaProps> = ({}) => {
  return (
    <StyledDruga>
      <h1> H1 element </h1>
      <h2> H2 element </h2>
      <h3> H3 element </h3>
      <h4> H4 element </h4>
      <h5> H5 element </h5>
      <h6> H6 element </h6>
      <p> paragraf </p>
      <ul>
        <li>neporedana lista</li>
        <li>
          <a href="https://google.com">link za google</a>
        </li>
        <li>
          <a href="https://youtube.com">link za youtube</a>
        </li>
      </ul>
      <table>
        <tr>
          <td>Ime</td>
          <td>Dob</td>
        </tr>
        <tr>
          <td>Maja</td>
          <td>33</td>
        </tr>
        <tr>
          <td>Ivo</td>
          <td>22</td>
        </tr>
      </table>
    </StyledDruga>
  );
};

export default VjezbaDva;
