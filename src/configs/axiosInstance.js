import axios from "axios";
import Cookies from "js-cookie";
import CONST from "../utils/constants";

const token = Cookies.get("token");
console.log(token);

const config = {
  baseURL: CONST.BASE_URL,
  headers: {
    Authorization: `Bearer ${token}`,
  },
};
