import axios from "axios";

const BASE_URL = import.meta.env.VITE_BACKEND_SERVER || "https://eshop-mongo-api.vercel.app/api/";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = (token) => { 
  return axios.create({
    baseURL: BASE_URL,
    headers: { token: `Bearer ${token}` },
  });
}