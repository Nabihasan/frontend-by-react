import axios from "axios";

const BASE_URL ="http://localhost:8080/api/auth/signin";

export const myAxios = axios.create({
    baseURL: BASE_URL,
});
