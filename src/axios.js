import axios from "axios";

const instance = axios.create({
    // here we will use the API (cloud function) URL
    baseURL: process.env.REACT_APP_BASE_URL
});

export default instance;

