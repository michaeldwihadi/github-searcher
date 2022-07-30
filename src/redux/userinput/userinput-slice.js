import { createSlice } from "@reduxjs/toolkit";

const userinputSlice = createSlice({
  name: "userinput",
  initialState: { searchQuery: "" },
  reducers: {
    setSearchInput(state, action) {
      state.searchQuery = action.payload.searchQuery;
    },
  },
});

export const userinputActions = userinputSlice.actions;

export default userinputSlice;
