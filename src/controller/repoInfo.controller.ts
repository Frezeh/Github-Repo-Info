import { Request, Response } from "express";
import {
  ReadAllRepoInfoInput,
  ReadRepoInfoInput,
} from "../schema/repoInfo.schema";
import { getAllRepoInfo, getRepoInfo } from "../service/repoInfo.service";

export async function getRepoInfoHandler(
  req: Request<ReadRepoInfoInput["params"]>,
  res: Response
) {
  const username = req.params.repo_name;
  // @ts-ignore
  const path: string = req.params[0];

  // remove first character from params path
  const repoName = path.substring(1);
  const response = await getRepoInfo(username, repoName);

  if (!response) {
    return res.sendStatus(404);
  }

  return res.send(response);
}

export async function getAllRepoInfoHandler(
  req: Request<ReadAllRepoInfoInput["params"]>,
  res: Response
) {
  const { username } = req.params;

  const response = await getAllRepoInfo(username);

  if (!response) {
    return res.sendStatus(404);
  }

  return res.send(response);
}
