import axios from "axios";
import Cookies from "js-cookie";
import CONST from "../utils/constants";

const token = Cookies.get("token")

const config = {
  baseURL: CONST.BASE_URL,
  headers:{
    'Authorization': `Bearer ${token}`
  }
}

const axiosInstance = axios.create(config)
export default axiosInstance