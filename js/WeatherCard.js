export default class WeatherCard {
    constructor(
        title,
        country,
        city,
        date,
        temperature,
        felt,
        textWeather,
        icon
    ) {
        this.title = title;
        this.country = country;
        this.city = city;
        this.date = date;
        this.temperature = temperature;
        this.felt = felt;
        this.textWeather = textWeather;
        this.icon = icon;
    }
    render() {
        const div = document.createElement("div");
        div.className = "card";
        div.style = "width: 14rem;";
        const title = document.createElement("h3");
        title.textContent = this.title;
        title.className = "card-title text-center";
        const location = document.createElement("p");
        location.textContent = `${this.country}, ${this.city}`;
        const localTime = document.createElement("p");
        localTime.textContent = this.date;
        const temperature = document.createElement("p");
        temperature.textContent = this.temperature;
        const icon = document.createElement("img");
        icon.setAttribute("src", `${this.icon}`);
        icon.className = "card-img-top";
        const textWeather = document.createElement("p");
        textWeather.textContent = this.textWeather;
        const felt = document.createElement("p");
        felt.textContent = this.felt;
        const button = document.createElement("button");
        button.className = "btn btn-primary d-flex justify-content-center";
        button.textContent = "Показать больше";
        // button.addEventListener('click',()=>{
        //тут будет клик
        // })
        div.append(
            title,
            location,
            localTime,
            temperature,
            icon,
            textWeather,
            felt,
            button
        );

        return div;
    }
}
