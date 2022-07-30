import React from "react";
import Loading from "../Loading";
import githubTextLogo from "../../image/GitHub-TextLogo.png";
import "./index.css";
import InitialContent from "../InitialContent";

const RepoContent = ({ repositoryData, error }) => {
  return (
    <>
      {error ? (
        <InitialContent error={error} />
      ) : (
        <>
          {repositoryData.loading ? (
            <Loading />
          ) : (
            <>
              <div className="repo-container">
                {repositoryData.repository.items &&
                  repositoryData.repository.items.map((repo) => {
                    return (
                      <div className="repo-list repo-list-column" key={repo.id}>
                        <div className="columns-img">
                          <img
                            className="repo-img"
                            src={githubTextLogo}
                            alt="github-textlogo"
                          />
                        </div>
                        <div className="columns-content">
                          <a className="external-link" href={repo.html_url}>
                            <h1 className="username">{repo.name}</h1>
                          </a>
                          <div className="description">
                            <p className="details">
                              Author : {repo.owner.login}
                            </p>
                            {repo.language && (
                              <p className="language">{repo.language}</p>
                            )}
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

export default RepoContent;
