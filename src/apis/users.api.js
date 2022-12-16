import axiosInstance from "../configs/axiosInstance";

const UserAPI = {
  async getAllUser(page) {
    try {
      const response = await axiosInstance.get(`users?page=${page}`);
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

  async banUser(data) {
    try {
      const response = await axiosInstance.put(`users/${data.id}/ban`,
        {banUntil: data.banUntil}
      );
      console.log(data)
      return response.data.data;
    } catch (error) {
      console.log(error.message);
    }
  }
};

export default UserAPI;
