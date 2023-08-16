"use client";
import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "@/app/GlobalRedux/store";

interface SearchState {
  value: boolean;
}

const initialState: SearchState = {
  value: false,
} as SearchState;

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    start: (state) => {
      state.value = true;
    },
    stop: (state) => {
      state.value = initialState.value;
    },
  },
});

export const { start, stop } = searchSlice.actions;

export const selectSearch = (state: RootState) => state.searches.value;

export default searchSlice.reducer;
