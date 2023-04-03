//Основной скрипт
import Request from "./Request.js";
import constants from "./constants.js";
import WeatherCard from "./CreateWeatherCard.js";
const { root } = constants;

Request.send("GET", "current.json", "&q=Kiev&lang=ru").then((data) => {
    console.log("current", data);
    for (const key in data) {
        console.log(key);
    }
});

Request.send("GET", "forecast.json", "&q=Kiev&days=3").then((data) => {
    console.log("future", data);
});

const neddedDate = "2023-04-01";

Request.send(
    "GET",
    "history.json",
    `&q=Kiev&dt=2023-03-29&end_dt=${neddedDate}`
).then((data) => {
    console.log("past", data);
});

//Это тест
const weathet = new WeatherCard(
    "Погода сегодня",
    "vefverf",
    "rvrvvf",
    "rvvr",
    44,
    55,
    "fvfvfvfv",
    "./img/weather.svg",
    55
);
console.log(weathet.render(root));
