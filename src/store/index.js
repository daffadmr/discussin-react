import { combineReducers, configureStore } from "@reduxjs/toolkit";
import topicSlice from "./features/topicSlice";

const rootReducer = combineReducers({
	topic: topicSlice
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
  getDefaultMiddleware({
    serializableCheck: false,
  }),
});