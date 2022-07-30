import { getData } from "../../utils/fetchData";
import { usersActions } from "./users-slice";

export const fetchUsersData = (queryString, page) => {
  return async (dispatch) => {
    dispatch(
      usersActions.showLoading({
        loading: true,
      })
    );

    const fetchData = async () => {
      let response = await getData("users", queryString, page);
      if (response.status !== 200) {
        throw new Error("Could not fetch users data!");
      }

      return response.data;
    };

    try {
      const allUsersData = await fetchData();
      dispatch(
        usersActions.getUsersData({
          users: allUsersData,
        })
      );
      dispatch(
        usersActions.showLoading({
          loading: false,
        })
      );
    } catch (error) {
      dispatch(
        usersActions.showLoading({
          loading: false,
        })
      );
      throw new Error(error);
    }
  };
};
