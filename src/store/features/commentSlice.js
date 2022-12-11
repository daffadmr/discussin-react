import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import axiosInstance from "../../configs/axiosInstance";

export const getComments = createAsyncThunk(
  "comments/getComments",
  async (id) => {
    const respone = await axiosInstance.get(`posts/comments/${id}`);
    return respone.data.data;
  }
);
const commentEntity = createEntityAdapter({
  selectId: (comment) => comment.ID,
});

const commentSlice = createSlice({
  name: "comments",
  initialState: commentEntity.getInitialState({ loading: false }),
  extraReducers: (builder) => {
    builder.addCase(getComments.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getComments.fulfilled, (state, action) => {
      state.loading = false;
      commentEntity.setAll(state, action.payload);
    });
  },
});
export const commentSelector = commentEntity.getSelectors(
  (state) => state.comments
);
export default commentSlice.reducer;
