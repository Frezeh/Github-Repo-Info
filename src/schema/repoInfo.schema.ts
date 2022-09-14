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

const params = {
  params: object({
    repo_name: string({
      required_error: "repo_name is required",
    }),
  }),
};

const allRepoParams = {
  params: object({
    username: string({
      required_error: "username is required",
    }),
  }),
};

export const getRepoInfoSchema = object({
  ...params,
});

export const getAllRepoInfoSchema = object({
  ...allRepoParams,
});

export type ReadRepoInfoInput = TypeOf<typeof getRepoInfoSchema>;
export type ReadAllRepoInfoInput = TypeOf<typeof getAllRepoInfoSchema>;
