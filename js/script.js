//Основной скрипт
import Request from "./Request.js";
import constants from "./constants.js";
import WeatherCard from "./CreateWeatherCard.js";
const { root } = constants;

Request.send("GET", "current.json", "&q=Kiev&lang=ru")
    .then((data) => {
        let { current } = data;
        let { location } = data;
        console.log(data);
        const weathet = new WeatherCard(
            "Погода сегодня",
            location.country,
            location.name,
            location.localtime,
            current.temp_c,
            current.feelslike_c,
            current.condition.text,
            current.condition.icon,
            current.wind_kph
        );
        console.log(weathet.render(root));
    })
    .catch((e) => {
        console.log(e.massage);
    });

Request.send("GET", "forecast.json", "&q=Kiev&days=3").then((data) => {
    console.log("future", data);
});

// const neddedDate = "2023-04-01";

// Request.send(
//     "GET",
//     "history.json",
//     `&q=Kiev&dt=2023-03-29&end_dt=${neddedDate}`
// ).then((data) => {
//     console.log("past", data);
// });
