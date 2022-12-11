import axiosInstance from "../configs/axiosInstance";

const UserAPI = {
  async getAllUser(cb) {
    try {
      const response = await axiosInstance.get("users/?page=1");
      cb(response.data.data);
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
      const response = await axiosInstance.delete(`${id}`);
      return response;
    } catch (error) {
      console.log(error.message);
    }
  },
};

export default UserAPI;
