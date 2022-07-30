import React from "react";
import InitialContent from "../InitialContent";

import Loading from "../Loading";
import "./index.css";

const UsersContent = ({ usersData, error }) => {
  return (
    <>
      {error ? (
        <InitialContent error={error} />
      ) : (
        <>
          {usersData.loading ? (
            <Loading />
          ) : (
            <>
              <div className="users-container">
                {usersData.users.items &&
                  usersData.users.items.map((user) => {
                    return (
                      <div
                        className="users-list users-list-column"
                        key={user.id}
                      >
                        <div className="columns-img">
                          <img
                            className="users-img"
                            src={user.avatar_url}
                            alt={user.login}
                          />
                        </div>
                        <div className="columns-content">
                          <a
                            className="external-link"
                            href={`https://github.com/${user.login}`}
                          >
                            <h1 className="username">{user.login}</h1>
                          </a>
                          <div className="description">
                            <p className="details">ID : {user.id}</p>
                            <p className="details">Score : {user.score}</p>
                            <p className="details">Type : {user.type}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </>
          )}
        </>
      )}
    </>
  );
};

export default UsersContent;
