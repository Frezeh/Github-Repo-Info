import { Octokit } from "@octokit/rest";
import config from "config";

const token = config.get<string>("personalAccessToken");

const octokit = new Octokit({
  auth: token,
});

export const getRepoInfo = async (username: string, repoName: string) => {
  try {
    const { data } = await octokit.rest.repos.get({
      owner: username,
      repo: repoName,
    });

    return {
      RepoName: data.full_name,
      RepoDescription: data.description,
      NumberOfStars: data.stargazers_count,
    };
  } catch (e) {
    console.log(e);
  }
};

export const getAllRepoInfo = async (query: string) => {
  try {
    const { data } = await octokit.rest.repos.listForUser({
      username: query,
    });

    const ArrayOfRepo = data.map((repo) => {
      return {
        RepoName: repo.full_name,
        RepoDescription: repo.description,
        NumberOfStars: repo.stargazers_count,
      };
    });

    return ArrayOfRepo;
  } catch (e) {
    console.log(e);
  }
};
