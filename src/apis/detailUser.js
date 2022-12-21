import axiosInstance from "../configs/axiosInstance";

export const getDetail = async (id, cb) => {
  try {
    const result = await axiosInstance.get(`users/${id}/post`);
    cb(result.data);
  } catch (error) {
    console.log(error);
  }
};
