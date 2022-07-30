import { createSlice } from "@reduxjs/toolkit";

const repositorySlice = createSlice({
  name: "repository",
  initialState: {
    repository: [],
    loading: false,
  },
  reducers: {
    showLoading(state, action) {
      state.loading = action.payload.loading;
    },
    getRepositoryData(state, action) {
      state.repository = action.payload.repository;
    },
  },
});

export const repositoryActions = repositorySlice.actions;

export default repositorySlice;
