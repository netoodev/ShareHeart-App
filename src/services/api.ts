import axios from "axios";

export const api = axios.create({
    baseURL: "",
    params: {
        api_key: "",
        language: "",
    }
});