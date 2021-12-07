import {
  CardOne,
  CardTwo,
  CardThree,
  CardFour,
  CardFive,
  Cards,
  CardWeekday,
  CardIcon,
  CardTemperature,
  CardMinMax,
  CelsiusCards
} from "./StyledComponents";

export default function FiveDaysWeather({
  cardOne,
  cardTwo,
  cardThree,
  cardFour,
  cardFive,
  isCelsius
}) {
  const cardOneDay = cardOne.weekday;
  const cardOneIcon = cardOne.icon;
  const cardOneTemp = cardOne.temp;
  const cardOneTempFah = Math.trunc(cardOne.temp * 1.8 + 32);
  const cardOneMin = cardOne.min;
  const cardOneMinFah = Math.trunc(cardOne.min * 1.8 + 32);
  const cardOneMax = cardOne.max;
  const cardOneMaxFah = Math.trunc(cardOne.max * 1.8 + 32);

  const cardTwoDay = cardTwo.weekday;
  const cardTwoIcon = cardTwo.icon;
  const cardTwoTemp = cardTwo.temp;
  const cardTwoTempFah = Math.trunc(cardTwo.temp * 1.8 + 32);
  const cardTwoMin = cardTwo.min;
  const cardTwoMinFah = Math.trunc(cardTwo.min * 1.8 + 32);
  const cardTwoMax = cardTwo.max;
  const cardTwoMaxFah = Math.trunc(cardTwo.max * 1.8 + 32);

  const cardThreeDay = cardThree.weekday;
  const cardThreeIcon = cardThree.icon;
  const cardThreeTemp = cardThree.temp;
  const cardThreeTempFah = Math.trunc(cardThree.temp * 1.8 + 32);
  const cardThreeMin = cardThree.min;
  const cardThreeMinFah = Math.trunc(cardThree.min * 1.8 + 32);
  const cardThreeMax = cardThree.max;
  const cardThreeMaxFah = Math.trunc(cardThree.max * 1.8 + 32);

  const cardFourDay = cardFour.weekday;
  const cardFourIcon = cardFour.icon;
  const cardFourTemp = cardFour.temp;
  const cardFourTempFah = Math.trunc(cardFour.temp * 1.8 + 32);
  const cardFourMin = cardFour.min;
  const cardFourMinFah = Math.trunc(cardFour.min * 1.8 + 32);
  const cardFourMax = cardFour.max;
  const cardFourMaxFah = Math.trunc(cardFour.max * 1.8 + 32);

  const cardFiveDay = cardFive.weekday;
  const cardFiveIcon = cardFive.icon;
  const cardFiveTemp = cardFive.temp;
  const cardFiveTempFah = Math.trunc(cardFive.temp * 1.8 + 32);
  const cardFiveMin = cardFive.min;
  const cardFiveMinFah = Math.trunc(cardFive.min * 1.8 + 32);
  const cardFiveMax = cardFive.max;
  const cardFiveMaxFah = Math.trunc(cardFive.max * 1.8 + 32);

  return (
    <Cards id="cards">
      <CardOne>
        <CardWeekday>{cardOneDay}</CardWeekday>
        <CardIcon src={cardOneIcon} />
        <CardTemperature>
          {isCelsius ? cardOneTemp : cardOneTempFah}{" "}
          <CelsiusCards> {isCelsius ? "℃" : "℉"} </CelsiusCards>
        </CardTemperature>
        <CardMinMax>
          {isCelsius ? cardOneMin : cardOneMinFah} {isCelsius ? "℃" : "℉"} /{" "}
          {isCelsius ? cardOneMax : cardOneMaxFah} {isCelsius ? "℃" : "℉"}
        </CardMinMax>
      </CardOne>
      <CardTwo>
        <CardWeekday>{cardTwoDay}</CardWeekday>
        <CardIcon src={cardTwoIcon} />
        <CardTemperature>
          {isCelsius ? cardTwoTemp : cardTwoTempFah}
          <CelsiusCards> {isCelsius ? "℃" : "℉"} </CelsiusCards>
        </CardTemperature>
        <CardMinMax>
          {isCelsius ? cardTwoMin : cardTwoMinFah} {isCelsius ? "℃" : "℉"} /{" "}
          {isCelsius ? cardTwoMax : cardTwoMaxFah} {isCelsius ? "℃" : "℉"}
        </CardMinMax>
      </CardTwo>
      <CardThree>
        <CardWeekday>{cardThreeDay}</CardWeekday>
        <CardIcon src={cardThreeIcon} />
        <CardTemperature>
          {isCelsius ? cardThreeTemp : cardThreeTempFah}
          <CelsiusCards> {isCelsius ? "℃" : "℉"} </CelsiusCards>
        </CardTemperature>
        <CardMinMax>
          {isCelsius ? cardThreeMin : cardThreeMinFah} {isCelsius ? "℃" : "℉"} /{" "}
          {isCelsius ? cardThreeMax : cardThreeMaxFah} {isCelsius ? "℃" : "℉"}
        </CardMinMax>
      </CardThree>
      <CardFour>
        <CardWeekday>{cardFourDay}</CardWeekday>
        <CardIcon src={cardFourIcon} />
        <CardTemperature>
          {isCelsius ? cardFourTemp : cardFourTempFah}
          <CelsiusCards> {isCelsius ? "℃" : "℉"} </CelsiusCards>
        </CardTemperature>
        <CardMinMax>
          {isCelsius ? cardFourMin : cardFourMinFah} {isCelsius ? "℃" : "℉"} /{" "}
          {isCelsius ? cardFourMax : cardFourMaxFah} {isCelsius ? "℃" : "℉"}
        </CardMinMax>
      </CardFour>
      <CardFive>
        <CardWeekday>{cardFiveDay}</CardWeekday>
        <CardIcon src={cardFiveIcon} />
        <CardTemperature>
          {isCelsius ? cardFiveTemp : cardFiveTempFah}
          <CelsiusCards> {isCelsius ? "℃" : "℉"} </CelsiusCards>
        </CardTemperature>
        <CardMinMax>
          {isCelsius ? cardFiveMin : cardFiveMinFah} {isCelsius ? "℃" : "℉"} /{" "}
          {isCelsius ? cardFiveMax : cardFiveMaxFah} {isCelsius ? "℃" : "℉"}
        </CardMinMax>
      </CardFive>
    </Cards>
  );
}
