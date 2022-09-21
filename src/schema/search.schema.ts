import { object, string, TypeOf } from "zod";

/**
 * @openapi
 * components:
 *   schema:
 *     RepoInfo:
 *       type: object
 *       required:
 *        - RepoName
 *        - RepoDescription
 *        - NumberOfStars
 *       properties:
 *         RepoName:
 *           type: string
 *         RepoDescription:
 *           type: string
 *         NumberOfStars:
 *           type: number
 *     AllRepoInfo:
 *       type: array
 *       items:
 *          type: object
 *          properties:
 *            RepoName:
 *              type: string
 *            RepoDescription:
 *              type: string
 *            NumberOfStars:
 *              type: number
 */

const query = {
  query: object({
    query: string({
      required_error: "query is required",
    }),
  }),
};

export const getSearchSchema = object({
  ...query,
});

export type ReadSearchInput = TypeOf<typeof getSearchSchema>;
