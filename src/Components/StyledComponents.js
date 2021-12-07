import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
    background-image: linear-gradient(to right, pink, #8C92AC);
    color: #3d4035;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(4, 1fr);
  height: 100vh;
`;

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  grid-column: 2 / span 3;
  grid-row: 1;
  margin-left: 150px;
`;

export const Search = styled.input`
  outline: 0;
  margin: 0;
  font-size: 30px;
  height: 50px;
  background: transparent;
  border: none;
  border-bottom: 2px solid #8c92ac;
  margin-bottom: 50px;
`;

export const Current = styled.div`
  grid-column: 2 / span 3;
  grid-row: 2;
  margin: 0;
  padding: 0;
  height: 250px;
`;
//visibility: hidden;

export const Country = styled.div`
  text-align: center;
  font-size: 60px;
  font-weight: bold;
`;

export const Temp = styled.h1`
  margin: 0;
  text-align: center;
  font-size: 50px;
  font-weight: normal;
`;

export const Celsius = styled.sup`
  margin-left: 3px !important;
  font-size: 22px !important;
  font-weight: normal;
`;

export const MinMax = styled.div`
  text-align: center;
  font-size: 20px;
  margin-left: -20px;
`;

export const Description = styled.div`
  text-align: center;
  font-size: 20px;
  text-transform: capitalize;
  margin-left: -20px;
`;

export const Icon = styled.img`
  text-align: center;
  height: 50px;
  width: 50px;
`;

export const LineChartPlot = styled.div`
  grid-column: 2 / span 3;
  grid-row: 3;
  margin-bottom: 20px;
`;
//visibility: hidden;
export const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-column: 1 / span 5;
  grid-row: 4;
  background-color: white;
  background-image: linear-gradient(to right, pink, #8c92ac);
  justify-items: center;
`;
// visibility: hidden;

export const CardOne = styled.div`
  grid-column: 1;
`;

export const CardTwo = styled.div`
  grid-column: 2;
`;

export const CardThree = styled.div`
  grid-column: 3;
`;

export const CardFour = styled.div`
  grid-column: 4;
`;

export const CardFive = styled.div`
  grid-column: 5;
`;

export const CardWeekday = styled.p`
  text-align: center;
`;

export const CardIcon = styled.img`
  margin-left: 15px;
  height: 50px;
`;

export const CardTemperature = styled.div`
  text-align: center;
  font-size: 25px;
`;

export const CardMinMax = styled.div`
  margin-top: 20px;
  text-align: center;
  height: 40px;
`;

export const Measure = styled.div`
  grid-column: 5;
  grid-row: 2;
  font-weight: bold;
`;
//visibility: hidden;

export const Cel = styled.div`
  cursor: pointer;
  margin: 20px;
  width: 50px;
`;

export const Fah = styled.div`
  cursor: pointer;
  margin: 20px;
  width: 50px;
`;

export const CelsiusCards = styled.sup`
  margin-left: -5px !important;
  font-size: 15px !important;
  font-weight: normal;
`;

export const Date = styled.div`
  margin-left: -20px;
  font-size: 20px;
`;

export const Overlay = styled.div`
  position: fixed;
  display: ${(props) => (props.message ? "block" : "none")};
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
  cursor: default;
`;

export const ErrorMessageBox = styled.div`
  grid-column: 3;
  grid-row: 2;
  background-color: white;
  z-index: 5;
  height: 100px;
  width: 250px;
  border-radius: 20px;
`;

export const ErrorMessage = styled.div`
  text-align: center;
  font-size: 15px;
  margin-top: 40px;
`;

export const ErrorMessageCancel = styled.div`
  text-align: center;
  font-size: 20px;
  margin-top: -55px;
  margin-left: 180px;
  font-weight: bold;
  color: black;
  cursor: pointer;
`;

export const GeoLocation = styled.svg`
  cursor: pointer;
  margin-top: -40px;
`;
