import axios from "axios";

const BASE_URL = import.meta.env.VITE_BACKEND_SERVER || "https://eshop-mongo-api.vercel.app/api/";
// const TOKEN =
//   JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
//     .accessToken || "";

var getToken = () => {
  const user = JSON.parse(localStorage.getItem("vuex"))?.user;
  console.log(user)
  const currentUser = user && user.currentUser;
  if (!currentUser) return "";
  var TOKEN = currentUser.accessToken || "";
  return TOKEN;
};

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${getToken()}` },
});