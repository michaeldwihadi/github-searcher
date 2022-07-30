import { userinputActions } from "./userinput-slice";

export const setUserInputQuery = (searchQuery) => {
  return (dispatch) => {
    dispatch(
      userinputActions.setSearchInput({
        searchQuery: searchQuery,
      })
    );
  };
};
