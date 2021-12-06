import axios from "axios";

const api = axios.create({
    baseURL: "https://ait-tesapi.herokuapp.com",
});

export { api };