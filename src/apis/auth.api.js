import axiosInstance from "../configs/axiosInstance";

const AuthAPI = {
	async signin(payload) {
		try {
			const { email, password } = payload;
			const response = await axiosInstance.post("users/login", {
				email,
				password,
			});
			return response;
		} catch (err) {
			const { message } = err.response.data;
			throw new Error(message);
		}
	},
};

export default AuthAPI;