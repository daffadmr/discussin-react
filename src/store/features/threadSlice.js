import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import axiosInstance from "../../configs/axiosInstance";

export const getThread = createAsyncThunk("thread/detailUser", async () => {
  try {
    const id = 24;
    const result = await axiosInstance.get(`users/${id}/post`);
    return result.data.data;
  } catch (error) {
    console.log(error);
  }
});

const threadEntity = createEntityAdapter({
  selectId: (thread) => thread.ID,
});
const threadSlice = createSlice({
  name: "thread",
  initialState: threadEntity.getInitialState(),
  extraReducers: (builder) => {
    builder.addCase(getThread.fulfilled, (state, action) => {
      threadEntity.setAll(state, action.payload);
    });
  },
});
export const threadSelector = threadEntity.getSelectors(
  (state) => state.thread
);
export default threadSlice.reducer;
