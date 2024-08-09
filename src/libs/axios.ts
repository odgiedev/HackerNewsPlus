import axios from "Axios";

export const Axios = axios.create({
    baseURL: 'http://hn.algolia.com/api/v1',
});