import { SearchForm, Search, GeoLocation } from "./StyledComponents";
import { useFormik } from "formik";

export default function SearchBar({
  setLocal,
  setWeather,
  api,
  setShowWeather,
  setdataReady,
  setCurrentTrend,
  setCardOne,
  setCardTwo,
  setCardThree,
  setCardFour,
  setCardFive,
  setErrorMessage
}) {
  const formik = useFormik({
    initialValues: {
      location: ""
    },
    onSubmit: (event, actions) => {
      const location = event.location;
      actions.resetForm({ values: { location: "" } });
      const url = `https://api.openweathermap.org/data/2.5/forecast/daily?q=${location}&units=metric&cnt=6&appid=${api}`;

      const getData = async (e) => {
        fetch(url)
          .then((res) => res.json())
          .then((data) => {
            setLocal({
              city: data.city.name
            });

            // getDates(setCurrentTrend);
            /**GET DATES */
            // dates section

            const date = new Date();

            var tomorrowInc = 1; // Days you want to add
            var daythreeInc = 2;
            var dayfourInc = 3;
            var dayfiveInc = 4;
            var daysixInc = 5;

            const weekday = new Array(7);

            weekday[0] = "Dom";
            weekday[1] = "Seg";
            weekday[2] = "Ter";
            weekday[3] = "Qua";
            weekday[4] = "Qu";
            weekday[5] = "Sex";
            weekday[6] = "Sab";

            var tomorrowNumber = new Date(
              date.getTime() + tomorrowInc * 24 * 60 * 60 * 1000
            );
            var daythreeNumber = new Date(
              date.getTime() + daythreeInc * 24 * 60 * 60 * 1000
            );
            var dayfourNumber = new Date(
              date.getTime() + dayfourInc * 24 * 60 * 60 * 1000
            );
            var dayfiveNumber = new Date(
              date.getTime() + dayfiveInc * 24 * 60 * 60 * 1000
            );
            var daysixNumber = new Date(
              date.getTime() + daysixInc * 24 * 60 * 60 * 1000
            );

            var today = weekday[date.getDay()];
            var tomorrow = weekday[tomorrowNumber.getUTCDay()];
            var daythree = weekday[daythreeNumber.getUTCDay()];
            var dayfour = weekday[dayfourNumber.getUTCDay()];
            var dayfive = weekday[dayfiveNumber.getUTCDay()];
            var daysix = weekday[daysixNumber.getUTCDay()];

            /**END DATES SECTION */

            setWeather({
              temp: Math.ceil(data.list[0].temp.day),
              min: Math.ceil(data.list[0].temp.min),
              max: Math.ceil(data.list[0].temp.max),
              desc: data.list[0].weather[0].description,
              icon: `https://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`,
              weekday: today
            });

            setCurrentTrend({
              cardzero: Math.ceil(data.list[0].temp.day),
              cardone: Math.ceil(data.list[1].temp.day),
              cardtwo: Math.ceil(data.list[2].temp.day),
              cardthree: Math.ceil(data.list[3].temp.day),
              cardfour: Math.ceil(data.list[4].temp.day),
              cardfive: Math.ceil(data.list[5].temp.day),
              today: today,
              tomorrow: tomorrow,
              daythree: daythree,
              dayfour: dayfour,
              dayfive: dayfive,
              daysix: daysix
            });

            setCardOne({
              weekday: tomorrow,
              icon: `https://openweathermap.org/img/wn/${data.list[1].weather[0].icon}@2x.png`,
              temp: Math.ceil(data.list[1].temp.day),
              min: Math.ceil(data.list[1].temp.min),
              max: Math.ceil(data.list[1].temp.max)
            });

            setCardTwo({
              weekday: daythree,
              icon: `https://openweathermap.org/img/wn/${data.list[2].weather[0].icon}@2x.png`,
              temp: Math.ceil(data.list[2].temp.day),
              min: Math.ceil(data.list[2].temp.min),
              max: Math.ceil(data.list[2].temp.max)
            });

            setCardThree({
              weekday: dayfour,
              icon: `https://openweathermap.org/img/wn/${data.list[3].weather[0].icon}@2x.png`,
              temp: Math.ceil(data.list[3].temp.day),
              min: Math.ceil(data.list[3].temp.min),
              max: Math.ceil(data.list[3].temp.max)
            });

            setCardFour({
              weekday: dayfive,
              icon: `https://openweathermap.org/img/wn/${data.list[4].weather[0].icon}@2x.png`,
              temp: Math.ceil(data.list[4].temp.day),
              min: Math.ceil(data.list[4].temp.min),
              max: Math.ceil(data.list[4].temp.max)
            });

            setCardFive({
              weekday: daysix,
              icon: `https://openweathermap.org/img/wn/${data.list[5].weather[0].icon}@2x.png`,
              temp: Math.ceil(data.list[5].temp.day),
              min: Math.ceil(data.list[5].temp.min),
              max: Math.ceil(data.list[5].temp.max)
            });
          })
          .catch((error) => {
            setErrorMessage(true);
          });
      };

      getData();
      setShowWeather(true);
    }
  });

  return (
    <SearchForm
      id="search-form"
      onSubmit={(event) => formik.handleSubmit(event)}
    >
      <Search
        autoComplete="off"
        id="location"
        name="location"
        type="text"
        placeholder="Coloque a cidade"
        onChange={formik.handleChange}
        value={formik.values.location}
      />

      <GeoLocation
        stroke="currentColor"
        fill="currentColor"
        stroke-width="0"
        viewBox="0 0 28 28"
        color="#8C92AC"
        class="sc-jzrHLS dNLxbv"
        height="40"
        width="40"
        xmlns="http://www.w3.org/2000/svg"
        onClick={(event) => formik.handleSubmit(event)}
      >
        <path
          fill="none"
          stroke="#000"
          stroke-width="2"
          d="M12,22 C12,22 4,16 4,10 C4,5 8,2 12,2 C16,2 20,5 20,10 C20,16 12,22 12,22 Z M12,13 C13.657,13 15,11.657 15,10 C15,8.343 13.657,7 12,7 C10.343,7 9,8.343 9,10 C9,11.657 10.343,13 12,13 L12,13 Z"
        ></path>
      </GeoLocation>
    </SearchForm>
  );
}
