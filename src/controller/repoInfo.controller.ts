import { Request, Response } from "express";
import {
  ReadAllRepoInfoInput,
  ReadRepoInfoInput,
} from "../schema/repoInfo.schema";
import { getAllRepoInfo, getRepoInfo } from "../service/repoInfo.service";
import parseParameter from "../utils/params";

export async function getRepoInfoHandler(
  req: Request<ReadRepoInfoInput["params"]>,
  res: Response
) {
  
  const {username} = parseParameter(req)
  const {repoName} = parseParameter(req)

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
