import axios from "axios";

const api = axios.create({
    baseURL: 'https://nlw-03-backend.vercel.app',
})

export default api;