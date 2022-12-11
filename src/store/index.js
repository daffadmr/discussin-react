import { combineReducers, configureStore } from "@reduxjs/toolkit";
import topicSlice from "./features/topicSlice";
import userSlice from "./features/userSlice";

const rootReducer = combineReducers({
	user: userSlice,topic: topicSlice
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
  getDefaultMiddleware({
    serializableCheck: false,
  }),
});