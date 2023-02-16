import axios from "axios";
const token= localStorage.getItem("@DTC-TOKEN")
export const api = axios.create({
    baseURL:"http://localhost:3001/",
    headers: {'Authorization': 'Bearer'+ token},
    timeout: 15000,
})