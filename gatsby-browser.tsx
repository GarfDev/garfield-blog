const React = require("react");
const { RecoilRoot } = require("recoil");

import "./src/styles/global.css";

export const wrapRootElement = ({ element }: { element: React.ReactNode }) => {
  return <RecoilRoot>{element}</RecoilRoot>;
};
