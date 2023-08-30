//paginationSlice.ts
"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@/app/GlobalRedux/store";

interface PageState {
  currentHomePage: number;
  totalPagesInDBHome: number;
  currentSearchPage: number;
}

const initialState: PageState = {
  currentHomePage: 1,
  totalPagesInDBHome: 1,
  currentSearchPage: 1,
} as PageState;

export const paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    next: (state) => {
      state.currentHomePage += 1;
    },
    prev: (state) => {
      if (state.currentHomePage > 1) state.currentHomePage -= 1;
    },
    totalPagesInDBHome: (state, action: PayloadAction<number>) => {
      state.totalPagesInDBHome = action.payload;
    },
    reset: (state) => {
      (state.currentHomePage = initialState.currentHomePage),
        (state.totalPagesInDBHome = initialState.totalPagesInDBHome);
    },
    forward: (state) => {
      state.currentSearchPage += 1;
    },
    backward: (state) => {
      if (state.currentSearchPage > 1) state.currentHomePage -= 1;
    },
    // totalPagesInDBHome: (state, action: PayloadAction<number>) => {
    //   state.totalPagesInDBHome = action.payload;
    // },
  },
});

export const { next, prev, totalPagesInDBHome, reset, forward, backward } =
  paginationSlice.actions;

// For home page
export const paginationSearch = (state: RootState) =>
  state.pagination.currentHomePage;
export const totalPagesInDBHomeState = (state: RootState) =>
  state.pagination.totalPagesInDBHome;

// For search page
export const currentSearchPage = (state: RootState) =>
  state.pagination.currentSearchPage;

export default paginationSlice.reducer;
