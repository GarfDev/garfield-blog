import { atom, selectorFamily } from "recoil";
import GistService from "../services/github.service";
import { GITHUB_USERNAME } from "../configs/environment";
import { IGist } from "../types/gist";

type SelectorMapper<Type> = {
  [Property in keyof Type]: Type[Property];
};

interface GistFetchProps {
  page: number;
  limit: number;
}

const gistListSelector = selectorFamily<IGist[], SelectorMapper<Partial<GistFetchProps>>>({
  key: "gist",
  get: ({ page, limit }) => async () => {
    const gists = await GistService.fetchList(GITHUB_USERNAME, { page, limit });
    return gists as IGist[];
  },
});

export default gistListSelector;
