import axios from "axios";
import CONST from "../utils/constants";

// const token = localStorage.getItem("token");
const config = {
  baseURL: CONST.BASE_URL,
  // headers: {
  //   Authorization: `Bearer ${token !== null ? token : "gagal"}`,
  // },
};
const axiosInstance = axios.create(config);
axiosInstance.interceptors.request.use((config) => {
  console.log(config);
  config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
  return config;
});
export default axiosInstance;
