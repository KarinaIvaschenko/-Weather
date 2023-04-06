import constants from "./constants.js";

const { API_KEY, BASE_URL, PHYSICAL_URL } = constants;

export default class Request {
    static send(method, url) {
        return fetch(url, {
            method,
        }).then((response) => response.json());
    }
    static async getLocation() {
        const physicalIP = await Request.send("GET", PHYSICAL_URL);
        return physicalIP;
    }
}
