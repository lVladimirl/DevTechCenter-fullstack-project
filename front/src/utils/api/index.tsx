import axios from "axios";
const token= sessionStorage.getItem("@DTC-token")
export const api = axios.create({
    baseURL:"http://localhost:3001/",
    headers: {'Authorization': `Bearer ${token}`},
    timeout: 15000,
})