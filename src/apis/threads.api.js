import axiosInstance from "../configs/axiosInstance";

const ThreadAPI = {
  async getAllThread() {
    try {
      const response = await axiosInstance.get("/");
      return response;
    } catch (error) {
      console.log(error.message)
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
      const response = await axiosInstance.delete(`${id}`)
      return response
    } catch (error) {
      console.log(error.message)
    }
  },
	
};

export default ThreadAPI;