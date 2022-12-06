import axios from "axios";
import axiosInstance from "../configs/axiosInstance";

const ThreadAPI = {
  async getAllThread(cb) {
    try {
      const respone = await axiosInstance.get("posts/recents?page=1");
      cb(respone.data.data);
    } catch (error) {
      console.log(error);
    }
    // try {
    //   const response = await axios({
    //     method: "get",
    //     url: "http://localhost:3001/posts",
    //   });
    //   return cb(response.data);
    // } catch (error) {
    //   console.log(error.message);
    // }
  },

  async getOneThread(id, cb) {
    try {
      const respone = await axiosInstance.get(`posts/${id}`);
      cb(respone.data.data);
    } catch (error) {
      console.log(error);
    }
  },
  // commnet thread
  async getComment(id, cb) {
    try {
      const result = await axiosInstance.get(`posts/comments/${id}`);
      cb(result.data.data);
    } catch (error) {
      console.log(error);
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
      await axiosInstance.delete(`posts/delete/${id}`);
      console.log(id);
      // this.getAllThread(cb);
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
