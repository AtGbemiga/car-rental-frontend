"use client";
import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./features/searchRedux/searchSlice";
import paginationReducer from "./features/pagination/paginationSlice";

export const store = configureStore({
  reducer: {
    searches: searchReducer,
    pagination: paginationReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
