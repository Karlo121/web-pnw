import React from "react";

export const formaDva: React.FC = () => {
  return (
    <div>
      <form>
        Ime:
        <input type="text"></input>
        <p>Zelite li se pretplatiti na casopis?</p>
        <input type="checkbox" checked></input>
        <br></br>
        Koliko ste stari
        <input type="radio"></input>
        <br></br>
        Izmedu 0 i 5 godina
        <br></br>
        <input type="button" value="ispunio sam sve"></input>
      </form>
    </div>
  );
};

export default formaDva;
