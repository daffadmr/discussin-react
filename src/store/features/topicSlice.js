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
    await TopicApi.deleteTopic(id);
    return id
  } catch (err) {
    console.log(err.message);
  }
});

export const updateTopic = createAsyncThunk("update/topic", async (data) => {
  try {
    const res = await TopicApi.updateTopic(data);
    console.log(res)
    return res
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
        console.log(action)
        state.data = state.data.map(val => {
          if (val.id === action.payload.id) {
            return action.payload
          }
          return val
        })
      });
  },
});

// export const topicSelector = topicEntity.getSelectors(state => state.topic)
export default topicSlice.reducer;
