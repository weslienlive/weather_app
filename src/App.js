import { useState } from "react";
import {
  GlobalStyle,
  Grid,
  Overlay,
  ErrorMessageBox,
  ErrorMessage,
  ErrorMessageCancel
} from "./Components/StyledComponents";
import SearchBar from "./Components/SearchBar";
import CurrentWeather from "./Components/CurrentWeather";
import WeatherTrend from "./Components/WeatherTrend";
import FiveDaysWeather from "./Components/FiveDaysWeather";
import Units from "./Components/Units";

export default function App() {
  const [currentLocation, setCurrentLocation] = useState({
    city: ""
  });

  const [currentWeather, setCurrentWeather] = useState({
    temp: "",
    min: "",
    max: "",
    desc: "",
    icon: "",
    weekday: ""
  });

  const [currentTrend, setCurrentTrend] = useState({
    cardzero: "",
    cardone: "",
    cardtwo: "",
    cardthree: "",
    cardfour: "",
    cardfive: ""
  });

  const [cardOne, setCardOne] = useState({
    weekday: "",
    icon: "",
    temp: "",
    min: "",
    max: ""
  });

  const [cardTwo, setCardTwo] = useState({
    weekday: "",
    icon: "",
    temp: "",
    min: "",
    max: ""
  });

  const [cardThree, setCardThree] = useState({
    weekday: "",
    icon: "",
    temp: "",
    min: "",
    max: ""
  });

  const [cardFour, setCardFour] = useState({
    weekday: "",
    icon: "",
    temp: "",
    min: "",
    max: ""
  });

  const [cardFive, setCardFive] = useState({
    weekday: "",
    icon: "",
    temp: "",
    min: "",
    max: ""
  });

  const [showWeather, setShowWeather] = useState();
  const [dataReady, setdataReady] = useState(false);
  const [isCelsius, setIsCelsius] = useState(true);
  const [errorMessage, setErrorMessage] = useState(false);

  const apiKey = "542ffd081e67f4512b705f89d2a611b2";

  function handleErrorMessage() {
    setErrorMessage(false);
  }

  return (
    <Grid>
      <GlobalStyle />

      <SearchBar
        setLocal={setCurrentLocation}
        setWeather={setCurrentWeather}
        api={apiKey}
        setShowWeather={setShowWeather}
        setdataReady={setdataReady}
        setCurrentTrend={setCurrentTrend}
        setCardOne={setCardOne}
        setCardTwo={setCardTwo}
        setCardThree={setCardThree}
        setCardFour={setCardFour}
        setCardFive={setCardFive}
        setErrorMessage={setErrorMessage}
      />

      {showWeather && (
        <CurrentWeather
          currentLocation={currentLocation}
          currentWeather={currentWeather}
          dataReady={dataReady}
          isCelsius={isCelsius}
        />
      )}

      {showWeather && (
        <WeatherTrend currentTrend={currentTrend} isCelsius={isCelsius} />
      )}

      {showWeather && (
        <FiveDaysWeather
          cardOne={cardOne}
          cardTwo={cardTwo}
          cardThree={cardThree}
          cardFour={cardFour}
          cardFive={cardFive}
          isCelsius={isCelsius}
        />
      )}

      {showWeather && (
        <Units setdataReady={setdataReady} setIsCelsius={setIsCelsius} />
      )}

      {errorMessage && <Overlay message={errorMessage} />}

      {errorMessage && (
        <ErrorMessageBox>
          <ErrorMessage>Nenhum resultado encontrado.</ErrorMessage>
          <ErrorMessageCancel onClick={handleErrorMessage}>
            ✖
          </ErrorMessageCancel>
        </ErrorMessageBox>
      )}
    </Grid>
  );
}

/**
 * {<Loader bgColor={"#8C92AC"} type="bubble-scale" size={100} />}
 */
