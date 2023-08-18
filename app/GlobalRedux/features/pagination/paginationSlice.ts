//paginationSlice.ts
"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@/app/GlobalRedux/store";

interface PageState {
  value: number;
  totalPagesInDB: number;
}

const initialState: PageState = {
  value: 1,
  totalPagesInDB: 1,
} as PageState;

export const paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    next: (state) => {
      state.value += 1;
    },
    prev: (state) => {
      if (state.value > 1) state.value -= 1;
    },
    totalPagesInDB: (state, action: PayloadAction<number>) => {
      state.totalPagesInDB = action.payload;
    },
  },
});

export const { next, prev, totalPagesInDB } = paginationSlice.actions;

export const paginationSearch = (state: RootState) => state.pagination.value;
export const totalPagesInDBState = (state: RootState) =>
  state.pagination.totalPagesInDB;

export default paginationSlice.reducer;
