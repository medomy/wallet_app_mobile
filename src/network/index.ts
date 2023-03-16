import axios from "axios"

const config = {
    url: "https://ewalletbackend.onrender.com/api/v1"
}

export const instance = axios.create({
    baseURL: config.url
});
