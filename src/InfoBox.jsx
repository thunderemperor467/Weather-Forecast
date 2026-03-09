import MediaCard from "./materialUI/Card"
import "./InfoBox.css";
export default function InfoBox(){
    const Init_Url = "https://images.unsplash.com/photo-1722858343990-1604f540c15d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHVzdHklMjB3ZWF0aGVyfGVufDB8fDB8fHww"
    let info={
        city: "Delhi",
        feelslike: 24.84,
        temp: 25.05,
        tempMin: 25.05,
        tempMax: 25.05,
        humidity: 47,
        weather: "haze"
    }

    return(
        <div className="InfoBox">
            <h1>Weather Info.- {info.weather}</h1>

            <MediaCard 
                city={info.city}
                temp={info.temp}
                feelslike={info.feelslike}
                tempMin={info.tempMin}
                tempMax={info.tempMax}
                humidity={info.humidity}
                weather={info.weather}
            />

        </div>
    )
}