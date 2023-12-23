import axios from "axios";

const config = {
    baseURL: "https://todo.api.devcode.gethired.id",
};

export const api = axios.create(config);
