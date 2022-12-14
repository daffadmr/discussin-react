import axiosInstance from "../configs/axiosInstance";

const UserAPI = {
  async getAllUser() {
    try {
      const response = await axiosInstance.get("users?page=1");
      return response;
    } catch (error) {
      console.log(error.message);
    }
  },

  async createUser(data) {
    try {
      const response = await axiosInstance.post("/", data);
      return response;
    } catch (error) {
      console.log(error.message);
    }
  },

  async deleteUser(id) {
    try {
      const response = await axiosInstance.delete(`users/${id}`);
      return response;
    } catch (error) {
      console.log(error.message);
    }
  },
};

export default UserAPI;
