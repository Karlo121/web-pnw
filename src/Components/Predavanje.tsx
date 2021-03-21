import { StyledPredavanje } from "../Styles/Predavanje.style";

interface Predavanje {
  broj: number;
  link: string;
  pdf: string;
}

const Predavanje = (props: Predavanje) => {
  return (
    <StyledPredavanje>
      <h1>{props.broj}. Predavanje</h1>
      <p>
        <a href={props.link}>Link na predavanje</a>
      </p>
      <p>
        <a href={props.pdf}>Link na bilješke</a>
      </p>
    </StyledPredavanje>
  );
};

export default Predavanje;
