import {
  Current,
  Country,
  Temp,
  Celsius,
  MinMax,
  Description,
  Date
} from "./StyledComponents";

export default function CurrentWeather({
  dataReady,
  currentLocation,
  currentWeather,
  isCelsius,
  showWeather
}) {
  const location = currentLocation.city;
  const temp = currentWeather.temp;
  const tempFah = Math.trunc(currentWeather.temp * 1.8 + 32);
  const min = currentWeather.min;
  const minFah = Math.trunc(currentWeather.min * 1.8 + 32);
  const max = currentWeather.max;
  const maxFah = Math.trunc(currentWeather.max * 1.8 + 32);
  const weekday = currentWeather.weekday;

  return (
    <Current id="current" showWeather={showWeather}>
      <Country>{location}</Country>
      <Temp>
        {isCelsius ? temp : tempFah}
        <Celsius>{isCelsius ? "℃" : "℉"}</Celsius>
        <Date>{weekday}</Date>
      </Temp>
      <MinMax>
        {isCelsius ? min : minFah}
        {isCelsius ? "℃" : "℉"} / {isCelsius ? max : maxFah}
        {isCelsius ? "℃" : "℉"}
      </MinMax>
      <Description>{currentWeather.desc}</Description>
      {/* <Icon src={currentWeather.icon} /> */}
    </Current>
  );
}
