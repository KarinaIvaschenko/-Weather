//Основной скрипт
import Request from "./Request.js";
import constants from "./constants.js";
import WeatherCard from "./WeatherCard.js";
import { getFormattedDate } from "./utilities.js";

const { root, BASE_URL, API_KEY } = constants;

Request.getLocation().then((data) => {
    const { query, city, country } = data;

    Request.send(
        "GET",
        `${BASE_URL}forecast.json?key=${API_KEY}&q=${query}&days=3&lang=ru`
    ).then((data) => {
        console.log(data);
        const { current, forecast } = data;

        const cards = forecast.forecastday.map((item) => {
            const { date } = item;
            const time = new Date();
            const today = getFormattedDate(time);
            time.setDate(time.getDate() + 1);
            const tomorrow = getFormattedDate(time);
            time.setDate(time.getDate() + 1);
            const afterTomorrow = getFormattedDate(time);

            let title = "";
            let temperature = "";
            let feelslike = "";

            if (date === today) {
                title = "Погода сегодня";
                temperature = `Температура: ${current.temp_c} ℃`;
                feelslike = `Ощущается как: ${current.feelslike_c} ℃`;
            } else if (date === tomorrow) {
                title = "Погода завтра";
                temperature = `Максимальная температура: ${item.day.maxtemp_c} ℃`;
                feelslike = `Минимальная температура: ${item.day.mintemp_c} ℃`;
            } else if (date === afterTomorrow) {
                title = "Погода послезавтра";
                temperature = `Максимальная температура: ${item.day.maxtemp_c} ℃`;
                feelslike = `Минимальная температура: ${item.day.mintemp_c} ℃`;
            }

            const weatherCard = new WeatherCard(
                title,
                country,
                city,
                date,
                temperature,
                feelslike,
                item.day.condition.text,
                item.day.condition.icon
            );
            root.append(weatherCard.render());
        });
    });
});
