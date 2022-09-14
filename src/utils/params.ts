import { Request } from "express";
import { ReadRepoInfoInput } from "../schema/repoInfo.schema";

function parseParameter(req: Request<ReadRepoInfoInput["params"]>) {
  let params = req.params.repo_name;
  let arrayOfParams: string[];
  let username: string;
  let repoName: string;

  // if the parameter includes "/" (for swagger docs since it escapes "/" in the path parameter) split the parameter to get values
  // else (default) remove the first character ("/") from params path to get the repo name
  if (params.includes("/")) {
    arrayOfParams = params.split("/");
    username = arrayOfParams[0];
    repoName = arrayOfParams[1];
  } else {
    username = req.params.repo_name;
    // @ts-ignore
    repoName = req.params[0].substring(1);
  }

  return {
    username,
    repoName,
  };
}

export default parseParameter;
