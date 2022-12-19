import {
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import UserAPI from "../../apis/users.api";

const initialState = {
  data: [],
  currentPage: null,
  totalPage: null,
  status: "idle",
  error: null,
};

export const fetchDataUser = createAsyncThunk("fetch/user", async (page) => {
  try {
    const response = await UserAPI.getAllUser(page);
    console.log(response.data)
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

// export const updateUser = createAsyncThunk(
//   "update/user",
//   async ({ email, username }) => {
//     try {
//       const response = await UserAPI.updateUser({ email, username });
//       return response.data.data;
//     } catch (error) {
//       console.log(error);
//     }
//   }
// );

export const banUser = createAsyncThunk("ban/user", async (data) => {
  try {
    const response = await UserAPI.banUser(data);
    console.log(response)
    return response
  } catch (error) {
    console.log(error);
  }
}
); 

export const deleteUser = createAsyncThunk("delete/user", async (id) => {
  try {
    await UserAPI.deleteUser(id);
    return id;
  } catch (error) {
    console.log(error);
  }
});

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchDataUser.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchDataUser.fulfilled, (state, action) => {
        state.status = "succeed";
        state.data = action.payload.data;
        state.currentPage = action.payload.page;
        state.totalPage = action.payload.number_of_page;
      })
      .addCase(fetchDataUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.status = "succeed";
        console.log(action)
        state.data = state.data.filter(val => val.id !== action.payload)
      })
      .addCase(banUser.fulfilled, (state, action) => {
        state.status = "succeed";
        state.data = state.data.map(val => {
          if (val.id === action.payload.id) {
            return action.payload
          }
          return val
        })
      })
  },
});

export default userSlice.reducer;
