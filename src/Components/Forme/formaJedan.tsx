import React from "react";

export const formaJedan: React.FC = ({}) => {
  return (
    <div>
      <form>
        Ime:
        <input size={2} type="text"></input>
        <br></br>
        Starost:
        <input type="text" value="Ispuni me"></input>
      </form>
    </div>
  );
};

export default formaJedan;
