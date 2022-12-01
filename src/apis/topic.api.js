import axiosInstance from "../configs/axiosInstance";

const TopicAPI = {
  async getAllTopic() {
    try {
      const response = await axiosInstance.get("topics");
      return response;
    } catch (error) {
      console.log(error.message)
    }
  },

  async createTopic(data) {
    try {
      const response = await axiosInstance.post("/", data);
      return response;
    } catch (error) {
      console.log(error.message);
    }
  },

  async deleteTopic(id) {
    try {
      const response = await axiosInstance.delete(`${id}`)
      return response
    } catch (error) {
      console.log(error.message)
    }
  },
	
};

export default TopicAPI;