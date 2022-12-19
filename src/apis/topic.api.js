import Cookies from "js-cookie";
import axiosInstance from "../configs/axiosInstance";

const token = Cookies.get('token')

const TopicAPI = {
  async getAllTopic() {
    try {
      const response = await axiosInstance.get("topics");
      return response;
    } catch (error) {
      console.log(error.message)
    }
  },

  async createTopic({name, description}) {
    try {
      const response = await axiosInstance.post("/topics/create", {name, description}, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      return response;
    } catch (error) {
      console.log(error.message);
    }
  },

  async deleteTopic(id) {
    try {
      const response = await axiosInstance.delete(`topics/delete/${id}`)
      return response
    } catch (error) {
      console.log(error.message)
    }
  },

  async updateTopic(data) {
    try {
      const response = await axiosInstance.put(`topics/edit_description/${data.id}`, {description: data.description})
      return response
    } catch (error) {
      console.log(error.message)
    }
  },
};

export default TopicAPI;