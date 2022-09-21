import { Request, Response } from "express";
import { ReadSearchInput } from "../schema/search.schema";
import { searchResults } from "../service/search.service";

export async function getSearchResultHandler(req: Request<ReadSearchInput["query"]>,
res: Response
) {
  const { query } = req.query;
  const response = searchResults(query);

  return res.send(response);
}
