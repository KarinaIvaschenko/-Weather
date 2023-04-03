import constants from "./constants.js";

const { API_KEY, BASE_URL } = constants;

export default class Request {
    static send(method, period, params) {
        return fetch(`${BASE_URL}${period}?key=${API_KEY}${params}`, {
            method,
        }).then((response) => response.json());
    }
}
