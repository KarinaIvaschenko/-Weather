//пока эта карточка для реального времени

export default class WeatherCard {
    constructor(
        title,
        country,
        city,
        time,
        temperature,
        felt,
        textWeather,
        icon,
        wind
    ) {
        this.title = title;
        this.country = country;
        this.city = city;
        this.time = time;
        this.temperature = temperature;
        this.felt = felt;
        this.textWeather = textWeather;
        this.icon = icon;
        this.wind = wind;
    }
    render(element) {
        const div = document.createElement("div");
        div.className = "card";
        div.style = "width: 14rem;";
        const title = document.createElement("h3");
        title.textContent = this.title;
        title.className = "card-title text-center";
        const location = document.createElement("p");
        location.textContent = `${this.country}, ${this.city}`;
        const localTime = document.createElement("p");
        localTime.textContent = this.time;
        const temperature = document.createElement("p");
        temperature.textContent = this.temperature;
        const icon = document.createElement("img");
        icon.setAttribute("src", `${this.icon}`);
        icon.className = "card-img-top";
        const textWeather = document.createElement("p");
        textWeather.textContent = this.textWeather;
        const felt = document.createElement("p");
        felt.textContent = this.felt;
        const wind = document.createElement("p");
        wind.textContent = `${this.wind} km`;
        const button = document.createElement("button");
        button.className = "btn btn-primary d-flex justify-content-center";
        button.textContent = "Показать больше";
        div.append(
            title,
            location,
            localTime,
            temperature,
            icon,
            textWeather,
            felt,
            wind,
            button
        );
        element.append(div);
        return div;
    }
}
