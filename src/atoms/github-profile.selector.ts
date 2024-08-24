import { selector, selectorFamily } from "recoil";
import GistService from "../services/github.service";
import { GITHUB_USERNAME } from "../configs/environment";
import { IGithubUser } from "../types/github-user";

const githubAuthorSelector = selector<IGithubUser>({
  key: "github-user",
  get: async () => {
    const githubUser = await GistService.fetchUserInfo(GITHUB_USERNAME);
    return githubUser;
  },
});

export default githubAuthorSelector