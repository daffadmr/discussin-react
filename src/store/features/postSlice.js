import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
// import axios from "axios";
import axiosInstance from "../../configs/axiosInstance";

export const getPosts = createAsyncThunk("posts/getPosts", async () => {
  const respone = await axiosInstance.get("posts/recents?page=1");
  return respone.data.data;
});
export const deletePost = createAsyncThunk("posts/deletePost", async (id) => {
  await axiosInstance.delete(`posts/delete/${id}`);
  return id;
});
export const suspendPost = createAsyncThunk("posts/suspendPost", async (id) => {
  return await axiosInstance.put(`posts/${id}/suspend`);
});
// export const deletePost = createAsyncThunk("posts/deletePost", async (id) => {
//   await axiosInstance.delete(`/posts/delete/${id}`);
//   return id;
// });
// export const updatePost = createAsyncThunk(
//   "posts/updatePost",
//   async ({ id, data }) => {
//     const respone = await axiosInstance.put("");
//     return respone.data.data;
//   }
// );
const postEntity = createEntityAdapter({
  selectId: (posts) => posts.ID,
});

const postSlice = createSlice({
  name: "posts",
  initialState: postEntity.getInitialState({ loading: false }),
  extraReducers: (builder) => {
    builder.addCase(getPosts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getPosts.fulfilled, (state, action) => {
      state.loading = false;
      postEntity.setAll(state, action.payload);
    });
    builder.addCase(deletePost.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(deletePost.fulfilled, (state, { payload: id }) => {
      state.loading = false;
      postEntity.removeOne(state, id);
    });
    builder.addCase(suspendPost.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(suspendPost.fulfilled, (state, action) => {
      state.loading = false;
      postEntity.updateOne(state, action.payload);
    });
    // .addCase()
    // [deletePost.fulfilled]: (state, action) => {
    //   postEntity.removeOne(state, action.payload);
    // },
    // [updatePost.fulfilled]: (state, action) => {
    //   postEntity.updateOne(state, {
    //     id: action.payload.ID,
    //     updates: action.payload,
    //   });
    // },
  },
});
export const postSelector = postEntity.getSelectors((state) => state.posts);
export default postSlice.reducer;
