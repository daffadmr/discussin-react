import { createAsyncThunk, createSlice, createEntityAdapter  } from "@reduxjs/toolkit";
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

export const updateUser = createAsyncThunk("update/user", async ({email, username}) => {
  try{
    const response = await UserAPI.updateUser({email, username});
    return response.data.data
  } catch (error) {
    console.log(error);
}
});

export const deleteUser = createAsyncThunk("delete/user", async ({id}) => {
  try{
    const response = await UserAPI.deleteUser({id});
    return response.data.data
  } catch (error) {
    console.log(error);
}
});

const userEntity = createEntityAdapter({
  selectId: (user) => user.id
})

const userSlice = createSlice({
	name: "user",
	initialState: userEntity.getInitialState(),
  extraReducers: {
    [fetchDataUser.fulfilled]: (state, action) => {
      userEntity.setAll(state, action.payload);
    },
    [deleteUser.fulfilled]: (state, action) => {
      userEntity.removeOne(state, action.payload);
    },
    [updateUser.fulfilled]: (state, action) => {
      userEntity.updateOne(state, { id: action.payload.id, updates: action.payload });
    }
  }
	// initialState,
	// extraReducers(builder) {
	// 	builder
	// 		.addCase(fetchDataUser.pending, (state, action) => {
	// 			state.status = "loading";
	// 		})
	// 		.addCase(fetchDataUser.fulfilled, (state, action) => {
	// 			state.status = "succeeded";
	// 			state.data = action.payload;
	// 		})
	// 		.addCase(fetchDataUser.rejected, (state, action) => {
	// 			state.status = "failed";
	// 			state.error = action.error.message;
	// 		});
	// },
});

export const userSelector = userEntity.getSelectors(state => state.user)
export default userSlice.reducer;