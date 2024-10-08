import { selectorFamily } from "recoil";
import GistService from "../services/github.service";
import { GITHUB_USERNAME } from "../configs/environment";
import { IGist } from "../types/gist";

type SelectorMapper<Type> = {
  [Property in keyof Type]: Type[Property];
};

interface GistFetchProps {
  id: string;
}

const gistSelector = selectorFamily<IGist, SelectorMapper<GistFetchProps>>({
  key: "gist",
  get: ({ id }) => async () => {
    const gists = await GistService.fetch(id);
    return gists as IGist;
  },
});

export default gistSelector;
