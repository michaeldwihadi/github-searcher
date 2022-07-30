import { getData } from "../../utils/fetchData";
import { repositoryActions } from "./repository-slice";

export const fetchRepositoryData = (queryString, page) => {
  return async (dispatch) => {
    dispatch(
      repositoryActions.showLoading({
        loading: true,
      })
    );

    const fetchData = async () => {
      let response = await getData("repositories", queryString, page);
      if (response.status !== 200) {
        throw new Error("Could not fetch users data!");
      }

      return response.data;
    };

    try {
      const allRepositoryData = await fetchData();
      dispatch(
        repositoryActions.getRepositoryData({
          repository: allRepositoryData,
        })
      );
      dispatch(
        repositoryActions.showLoading({
          loading: false,
        })
      );
    } catch (error) {
      dispatch(
        repositoryActions.showLoading({
          loading: false,
        })
      );
      throw new Error(error);
    }
  };
};
