// import {
//   createAsyncThunk,
//   createEntityAdapter,
//   createSlice,
// } from "@reduxjs/toolkit";
// import axios from "axios";
// import axiosInstance from "../../configs/axiosInstance";

// export const getPosts = createAsyncThunk("posts/getPosts", async () => {
//   const respone = await axiosInstance.get("/posts/recents?page=1");
//   return respone.data.data;
// });
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
// const postEntity = createEntityAdapter({
//   selectId: (posts) => posts.ID,
// });

// const postSlice = createSlice({
//   name: "posts",
//   initialState: postEntity.getInitialState(),
//   extraReducers: {
//     [getPosts.fulfilled]: (state, action) => {
//       postEntity.setAll(state, action.payload);
//     },
//     [deletePost.fulfilled]: (state, action) => {
//       postEntity.removeOne(state, action.payload);
//     },
//     [updatePost.fulfilled]: (state, action) => {
//       postEntity.updateOne(state, {
//         id: action.payload.ID,
//         updates: action.payload,
//       });
//     },
//   },
// });
// export const postSelector = postEntity.getSelectors((state) => state.posts);
// export default postSlice.reducer;
