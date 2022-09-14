import supertest from "supertest";
import mockServer from "../utils/server";

const app = mockServer();
const repo_name = "Frezeh/NovaAssetManagement-APP";
const username = "Frezeh";
const invalidRepoName = "njnhbeqkhbhbkkhbkhbkbkbknihhhbwbhkh";

describe("health check", () => {
  describe("responds if the server is up and running", () => {
    it("should return a 200", async () => {
      await supertest(app).get("/").expect(200);
    });
  });
});

describe("get repo info", () => {
  describe("given the repo does not exist", () => {
    it("should return a 404", async () => {
      await supertest(app).get(`/repo_info/${invalidRepoName}`).expect(404);
    });
  });

  describe("given the repo does exist", () => {
    it("should return a 200 status and the repo", async () => {
      const { body, statusCode } = await supertest(app).get(
        `/repo_info/${repo_name}`
      );

      expect(statusCode).toBe(200);
      expect(body.RepoName).toBe(repo_name);
    });
  });
});

describe("get all user's repo info", () => {
  describe("given the username does not exist", () => {
    it("should return a 404", async () => {
      await supertest(app).get(`/all_repo_info/${invalidRepoName}`).expect(404);
    });
  });

  describe("given the username does exist", () => {
    it("should return a 200 status and reponse should have properties (RepoName, RepoDescription, NumberOfStars)", async () => {
      const { body, statusCode } = await supertest(app).get(
        `/all_repo_info/${username}`
      );

      expect(statusCode).toBe(200);

      // test that each item in the repo data has the correct properties
      for (let i = 0; i < body.length; i += 1) {
        expect(body[i]).toHaveProperty("RepoName");
        expect(body[i]).toHaveProperty("RepoDescription");
        expect(body[i]).toHaveProperty("NumberOfStars");
      }
    });
  });
});
