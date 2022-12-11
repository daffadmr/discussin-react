import { combineReducers, configureStore } from "@reduxjs/toolkit";
import postSlice from "./features/postSlice";
import commentSlice from "./features/commentSlice";
// import userSlice from "./features/userSlice";

const rootReducer = combineReducers({
  // user: userSlice,
  posts: postSlice,
  comments: commentSlice,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
