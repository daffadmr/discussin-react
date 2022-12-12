import { createAsyncThunk, createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import TopicApi from "../../apis/topic.api";

// const initialState = {
//   data: [],
//   status: "idle",
//   error: null,
// };

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

const topicEntity = createEntityAdapter({
  selectId: (topic) => topic.ID
})

const topicSlice = createSlice({
  name: "topic",
  initialState: topicEntity.getInitialState(),
  extraReducers: {
    [fetchTopic.fulfilled]: (state, action) => {
      topicEntity.setAll(state, action.payload);
    },
    [createTopic.fulfilled]: (state, action) => {
      topicEntity.addOne(state, action.payload.data);
    },
    [deleteTopic.fulfilled]: (state, { payload: id }) => {
      topicEntity.removeOne(state, id);
      // topicEntity = state.data.filter(val => val.ID !== action.meta.arg)
    },
    // [updateProduct.fulfilled]: (state, action) => {
    //   userEntity.updateOne(state, { id: action.payload.id, updates: action.payload });
    // }
  }
  // initialState,
  // extraReducers(builder) {
  //   builder
  //     .addCase(fetchTopic.pending, (state, action) => {
  //       state.status = "loading";
  //     })
  //     .addCase(fetchTopic.fulfilled, (state, action) => {
  //       state.status = "succeed";
  //       state.data = action.payload;
  //     })
  //     .addCase(fetchTopic.rejected, (state, action) => {
  //       state.status = "failed";
  //       state.error = action.error.message;
  //     })
  //     .addCase(createTopic.fulfilled, (state, action) => {
  //       state.status = "succeed";
  //       state.data.push(action.payload.data);
  //     })
  //     .addCase(deleteTopic.fulfilled, (state, action) => {
  //       state.status = "succeed";
  //       console.log(action)
  //       state.data = state.data.filter(val => val.ID !== action.meta.arg)
  //     });
  // },
});

export const topicSelector = topicEntity.getSelectors(state => state.topic)
export default topicSlice.reducer;
