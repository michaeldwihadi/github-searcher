import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    loading: false,
  },
  reducers: {
    showLoading(state, action) {
      state.loading = action.payload.loading;
    },
    getUsersData(state, action) {
      state.users = action.payload.users;
    },
  },
});

export const usersActions = usersSlice.actions;

export default usersSlice;
