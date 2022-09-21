import {Parse} from "../utils/parseData";
import {readFileSync} from "fs";

const content = readFileSync("../../industry_sic.txt");

const data = content.toString();

export const searchResults = async (query: any) => {
  try {
    let result = Parse(data);

    let search = result.filter((res) => res.toLowerCase().startsWith(query.toLowerCase()))

    return search;
  } catch (e) {
    console.log(e);
  }
};