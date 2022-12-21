import axios from "axios";
import Cookies from "js-cookie";
import CONST from "../utils/constants";

const config = {
  baseURL: CONST.BASE_URL,
};
const axiosInstance = axios.create(config);

axiosInstance.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${Cookies.get("token")}`;
  return config;
});

export default axiosInstance;
