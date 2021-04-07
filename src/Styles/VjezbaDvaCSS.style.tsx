import styled from "styled-components";

export const StyledDrugaCSS = styled.div`
  width: 50%;
  margin: 0 auto;
`;

export const StyledHeader = styled.div`
  margin: 0 auto;
  color: white;
  background: black;
  text-align: center;
  width: 100%;
  h1 {
    margin-top: 0px;
    font-size: 64px;
    margin: 0;
    font-family: Georgia, sans-serif;
  }
  h2 {
    color: #00ccff;
    font-family: Verdana, sans-serif;
    padding-bottom: 10px;
  }
`;

export const StyledLinkovi = styled.div`
  background: black;
  width: 100%;
  margin: 0 auto;
  text-align: center;

  a {
    text-decoration: none;
    margin: 0 auto;
    color: #00ccff;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 12px;
    padding: 10px;
  }
`;

export const StyledParagraf = styled.div`
  background: #00ccff;
  p {
    padding: 10px;
    margin: 0px;
    text-align: justify;
  }
  h4 {
    text-align: right;
  }
`;

export const StyledTable = styled.div`
  background-color: black;
  color: white;

  table {
    width: 60%;
    border: 1px solid white;
    margin: 0 auto;
  }
  tr {
    border: 1px solid white;
  }
  th {
    border: 1px solid white;
  }
  td {
    border: 1px solid white;
  }
`;
