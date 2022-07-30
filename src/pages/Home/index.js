import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchUsersData } from "../../redux/users/users-actions";
import { fetchRepositoryData } from "../../redux/repository/repository-actions";
import { setUserInputQuery } from "../../redux/userinput/userinput-actions";

import SearchInput from "../../components/SearchInput";
import DropdownInput from "../../components/DropdownInput";
import UsersContent from "../../components/UsersContent";
import RepoContent from "../../components/RepoContent";
import Pagination from "../../components/Pagination";
import InitialContent from "../../components/InitialContent";

const Home = () => {
  const dispatch = useDispatch();
  const usersData = useSelector((state) => state.users);
  const repositoryData = useSelector((state) => state.repository);
  const userInput = useSelector((state) => state.userinput);
  const [query, setQuery] = useState("");
  const [dropdownValue, setDropdownValue] = useState("users");
  const [page, setPage] = useState(1);
  const [error, setError] = useState(false);
  const limit = 10;

  const handleValidation = () => {
    const format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    const currentQuery = query ? query : userInput.searchQuery;
    const test =
      format.test(currentQuery) && query !== undefined ? true : false;
    setError(test);
  };

  useEffect(() => {
    handleValidation();
  }, []);

  useEffect(() => {
    let queryString = "q=";
    const timeOutSearch = setTimeout(() => {
      if (userInput.searchQuery.length > 0 && query.length === 0) {
        dispatch(setUserInputQuery(userInput.searchQuery));
      } else {
        dispatch(setUserInputQuery(query));
      }
    }, 3000);

    if (query) {
      queryString = "q=" + encodeURIComponent(query);
    }

    if (
      query.length === 0 &&
      userInput.searchQuery.length > 0 &&
      dropdownValue === "users" &&
      page === 1
    ) {
      queryString = "q=" + encodeURIComponent(userInput.searchQuery);
    } else {
      switch (dropdownValue) {
        case "users":
          if (userInput.searchQuery.length > 0 && query.length === 0) {
            queryString = "q=" + encodeURIComponent(userInput.searchQuery);
          }
          dispatch(fetchUsersData(queryString, page));
          break;

        case "repository":
          if (userInput.searchQuery.length > 0 && query.length === 0) {
            queryString = "q=" + encodeURIComponent(userInput.searchQuery);
          }
          console.log(queryString);
          dispatch(fetchRepositoryData(queryString, page));
          break;

        default:
          break;
      }
    }
    return () => clearTimeout(timeOutSearch);
  }, [query, dropdownValue, page]);

  return (
    <div className="container">
      <SearchInput
        query={query}
        handleValidation={() => handleValidation()}
        handleChange={(e) => setQuery(e.target.value)}
      />
      <DropdownInput
        dropdownValue={dropdownValue}
        handleChange={(e) => setDropdownValue(e.target.value)}
      />
      {!usersData.users.items && !repositoryData.repository.items && (
        <InitialContent />
      )}
      {dropdownValue === "users" ? (
        <>
          {usersData.users.items && (
            <UsersContent usersData={usersData} error={error} />
          )}
        </>
      ) : (
        <>
          {repositoryData.repository.items && (
            <RepoContent repositoryData={repositoryData} error={error} />
          )}
        </>
      )}
      {(usersData.users.items || repositoryData.repository.items) && (
        <>
          {!usersData.loading && !repositoryData.loading && !error && (
            <Pagination
              page={page}
              setPage={setPage}
              limit={limit}
              total={usersData.users.total_count}
            />
          )}
        </>
      )}
    </div>
  );
};

export default Home;
