import { useState } from "react";
import BasicTextFields from "./materialUI/Input";
import IconLabelButtons from "./materialUI/Button";
import "./SearchBox.css";

export default function SerchBox({ updateInfo }) {
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);

  // API
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "453ee62b532766bf6833049f6cd00c30";

  let getWeatherInfo = async () => {
    try {
      let response = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );

      let jsonResponse = await response.json();
      console.log(jsonResponse);

      // Check if city exists
      if (jsonResponse.cod !== 200) {
        throw new Error("City not found");
      }

      let result = {
        city: city,
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        feelsLike: jsonResponse.main.feels_like,
        weatherDescription: jsonResponse.weather[0].description,
      };

      console.log(result);
      return result;
    } catch (err) {
      setError(true);
      return null;
    }
  };

  let handleChange = (evt) => {
    setCity(evt.target.value);
    setError(false); // remove error when user types again
  };

  let handleSubmit = async (evt) => {
    evt.preventDefault();
    let newInfo = await getWeatherInfo();
    if (newInfo) {
      updateInfo(newInfo);
      setCity("");
    }
  };

  return (
    <div className="SearchBox">
      <form onSubmit={handleSubmit}>
        <BasicTextFields value={city} onChange={handleChange} />
        <br /><br />
        <IconLabelButtons />
        {error && <p>No such place in our API!!</p>}
      </form>
    </div>
  );
}