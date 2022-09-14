import { Express, Request, Response } from "express";
import {
  getAllRepoInfoHandler,
  getRepoInfoHandler,
} from "./controller/repoInfo.controller";
import validateResource from "./middleware/validateResource";
import {
  getAllRepoInfoSchema,
  getRepoInfoSchema,
} from "./schema/repoInfo.schema";

function routes(app: Express) {
  /**
   * @openapi
   * /:
   *  get:
   *     tags:
   *     - Healthcheck
   *     description: Responds if the server is up and running
   *     responses:
   *       200:
   *         description: Server is up and running
   */

  // home route
  app.get("/", (req: Request, res: Response) => {
    res.status(200).send({
      message: "Server is up and running!",
    });
  });

  /**
   * @openapi
   * '/repo_info/{repo_name}':
   *  get:
   *     tags:
   *     - Get Repo Info
   *     description: Return a single repository information by the repository name
   *     parameters:
   *      - name: repo_name
   *        in: path
   *        description: The name of the repository
   *        required: true
   *        schema:
   *          type: string
   *          format: path
   *        style: simple
   *        explode: true
   *        x-multiSegment: true
   *     responses:
   *       200:
   *         description: Success
   *         content:
   *          application/json:
   *           schema:
   *              $ref: '#/components/schema/RepoInfo'
   *       404:
   *         description: Repository not found
   */

  // get repo info route
  app.get(
    "/repo_info/:repo_name*",
    validateResource(getRepoInfoSchema),
    getRepoInfoHandler
  );

  /**
   * @openapi
   * '/all_repo_info/{username}':
   *  get:
   *     tags:
   *     - Get All Repo Info
   *     description: Return an array of repository information by the organization or owner name
   *     parameters:
   *      - name: username
   *        in: path
   *        description: The organization or owner name
   *        required: true
   *     responses:
   *       200:
   *         description: Success
   *         content:
   *          application/json:
   *           schema:
   *              $ref: '#/components/schema/AllRepoInfo'
   *       404:
   *         description: User not found
   */

  // get all repo info route
  app.get(
    "/all_repo_info/:username",
    validateResource(getAllRepoInfoSchema),
    getAllRepoInfoHandler
  );
}

export default routes;
