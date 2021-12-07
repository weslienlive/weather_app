import { Cel, Fah, Measure } from "./StyledComponents";

export default function Units({ setIsCelsius }) {
  function handleCel() {
    setIsCelsius(true);
  }
  function handleFah() {
    setIsCelsius(false);
  }

  return (
    <Measure id="units">
      <Cel onClick={handleCel}>°Celsius</Cel>
      <Fah onClick={handleFah}>°Farenheit </Fah>
    </Measure>
  );
}
