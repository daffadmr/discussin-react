import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import UserAPI from "../../apis/users.api";

const initialState = {
	data: [],
	status: "idle",
	error: null,
};

export const fetchDataUser = createAsyncThunk("fetch/user", async () => {
  try {
    const response = await UserAPI.getAllUser();
    return response.data.data
  } catch (error) {
    console.log(error);
  }
});

const userSlice = createSlice({
	name: "user",
	initialState,
	extraReducers(builder) {
		builder
			.addCase(fetchDataUser.pending, (state, action) => {
				state.status = "loading";
			})
			.addCase(fetchDataUser.fulfilled, (state, action) => {
				state.status = "succeeded";
				state.data = action.payload;
			})
			.addCase(fetchDataUser.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.error.message;
			});
	},
});

export default userSlice.reducer;