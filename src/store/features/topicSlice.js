import { createAsyncThunk, createEntityAdapter, createSlice } from "@reduxjs/toolkit";
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
    const response = await TopicApi.createTopic({
      name, description
    });
    return response.data;
  } catch (err) {
    console.log(err.message);
  }
});

export const deleteTopic = createAsyncThunk("delete/topic", async (id) => {
  try {
    await TopicApi.deleteTopic(id);
    return id
  } catch (err) {
    console.log(err.message);
  }
});

export const updateTopic = createAsyncThunk("update/topic", async (data) => {
  try {
    const response = await TopicApi.updateTopic(data);
    return response.data.data
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
        state.data = state.data.filter(val => val.ID !== action.meta.arg)
      })
      .addCase(updateTopic.fulfilled, (state, action) => {
        state.status = "succeed";
        state.data = state.data.map(val => {
          if (val.ID === action.payload.ID) {
            return action.payload
          }
          return val
        })
      });
  },
});

export default topicSlice.reducer;
