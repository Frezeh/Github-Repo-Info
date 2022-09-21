import { Parse } from "../utils/parseData";
import { readFileSync } from "fs";
import { join } from "path";

function syncReadFile(filename: string) {
  const result = readFileSync(join(__dirname, filename), "utf-8");

  return result;
}

export const searchResults = (query: string) => {
  let data = syncReadFile("../../industry_sic.txt");

  let result = Parse(data);

  let search = result.filter((res) =>
    res.toLowerCase().startsWith(query.toLowerCase())
  );

  return search;
};
