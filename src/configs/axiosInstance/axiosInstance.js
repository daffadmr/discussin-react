import axios from "axios";
import { CONST } from "../../utils/constants";

const config = {
  baseURL: CONST.BASE_URL,
  headers:{
    'api-key': CONST.KEY
  }
}

export const axiosInstance = axios.create(config)