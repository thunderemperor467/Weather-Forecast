import { useState } from "react";
import BasicTextFields from "./materialUI/Input";
import IconLabelButtons from "./materialUI/Button";
import "./SearchBox.css";

export default function SerchBox() {
    let [city, setCity] = useState("");

    // API CALLING
    const API_URL = "https://api.openweathermap.org/data/2.5/weather"
    const API_KEY = "453ee62b532766bf6833049f6cd00c30";

    let getWeatherInfo = async()=>{
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse = await response.json();   //in a json format
        console.log(jsonResponse);

        let result ={
            city: city,
            temp: jsonResponse.main.temp,
            tempMin: jsonResponse.main.temp_min,
            tempMax: jsonResponse.main.temp_max,
            Humidity: jsonResponse.main.humidity,
            feelsLike: jsonResponse.main.feels_like,
            weatherDescription: jsonResponse.weather[0].description,
        }
        console.log(result);
    }



    let handleChange = (evt) => {
        setCity(evt.target.value);
    };

    let handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(city);
        setCity("");
        getWeatherInfo();
    };

  return (
    <div className="SearchBox">
      <h2>Search For the Weather</h2>

      <form onSubmit={handleSubmit}>
        
        <BasicTextFields 
          value={city} 
          onChange={handleChange} 
        />

        <br /><br />
        <IconLabelButtons />

      </form>
    </div>
  );
}
