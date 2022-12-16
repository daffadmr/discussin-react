import { combineReducers, configureStore } from "@reduxjs/toolkit";
import topicSlice from "./features/topicSlice";
import userSlice from "./features/userSlice";
import postSlice from "./features/postSlice";
import commentSlice from "./features/commentSlice";
import threadSlice from "./features/threadSlice";
// import userSlice from "./features/userSlice";

const rootReducer = combineReducers({
  // user: userSlice,
  posts: postSlice,
  comments: commentSlice,
  user: userSlice,
  topic: topicSlice,
  thread: threadSlice,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
