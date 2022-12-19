import axiosInstance from "../configs/axiosInstance";

const ThreadAPI = {
  async getThreads(cb) {
    try {
      const respone = await axiosInstance.get("posts/recents?page=1");
      return cb(respone.data.data);
    } catch (error) {
      console.log(error);
    }
  },
  async suspendThread(id) {
    try {
      await axiosInstance.put(`posts/${id}/suspend`);
    } catch (error) {
      console.log(error);
    }
  },
  async getAllThread() {
    try {
      const respone = await axiosInstance.get("posts/recents?page=1");
      return respone.data.data;
    } catch (error) {
      console.log(error);
    }
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
  async deleteThread(id) {
    try {
      await axiosInstance.delete(`posts/delete/${id}`);
    } catch (error) {
      console.log(error.message);
    }
  },
};

export default ThreadAPI;
