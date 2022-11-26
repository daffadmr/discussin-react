import axios from "axios";
import axiosInstance from "../configs/axiosInstance";

const ThreadAPI = {
  async getAllThread(cb) {
    try {
      const response = await axios({
        method: "get",
        url: "http://localhost:3001/posts",
      });
      return cb(response.data);
    } catch (error) {
      console.log(error.message);
    }
  },

  async createThread(data) {
    try {
      const response = await axiosInstance.post("/", data);
      return response;
    } catch (error) {
      console.log(error.message);
    }
  },

  async deleteThread(id) {
    try {
      const response = await axiosInstance.delete(`${id}`);
      return response;
    } catch (error) {
      console.log(error.message);
    }
  },
  async upadateThread(id, active, cb) {
    try {
      const response = await axios({
        method: "put",
        url: `http://localhost:3001/posts/${id}`,
        data: {
          isActive: active,
        },
      });
      return this.getAllThread(cb(response.data));
    } catch (error) {
      console.log(error.message);
    }
  },
};

export default ThreadAPI;
