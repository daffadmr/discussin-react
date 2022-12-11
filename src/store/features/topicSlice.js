import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import TopicApi from "../../apis/topic.api";

const initialState = {
  data: [],
  status: "idle",
  error: null,
};

export const fetchTopic = createAsyncThunk("fetch/topic", async () => {
  try {
    const response = await TopicApi.getAllTopic();
    return response.data.data;
  } catch (error) {
    console.log(error);
  }
});

export const createTopic = createAsyncThunk("create/topic", async ({name, description}) => {
  try {
    const res = await TopicApi.createTopic({
      name, description
    });
    return res.data;
  } catch (err) {
    console.log(err.message);
  }
});

export const deleteTopic = createAsyncThunk("delete/topic", async (id) => {
  try {
    const res = await TopicApi.deleteTopic(id);
    return res.data;
  } catch (err) {
    console.log(err.message);
  }
});

const topicSlice = createSlice({
  name: "topic",
  initialState,
  extraReducers(builder) {
    builder
      .addCase(fetchTopic.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchTopic.fulfilled, (state, action) => {
        state.status = "succeed";
        state.data = action.payload;
      })
      .addCase(fetchTopic.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(createTopic.fulfilled, (state, action) => {
        state.status = "succeed";
        state.data.push(action.payload.data);
      })
      .addCase(deleteTopic.fulfilled, (state, action) => {
        state.status = "succeed";
        console.log(action)
        state.data = state.data.filter(val => val.ID !== action.meta.arg)
      });
  },
});

export default topicSlice.reducer;
