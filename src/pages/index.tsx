import * as React from "react";
import { useRecoilValue } from "recoil";
import { navigate, type HeadFC, type PageProps } from "gatsby";

import gistListSelector from "../atoms/gist-list.selector";
import Layout from "../components/Layout";
import Gist from "../components/Gist";

const IndexPage: React.FC<PageProps> = () => {
  const urlParams = new URLSearchParams(window.location.search)

  const page = Number(urlParams.get('page'));
  const limit = Number(urlParams.get('limit'));

  const gists = useRecoilValue(gistListSelector({ page, limit }));

  console.log(gists)

  return (
    <Layout>
      <div className="content h-[max-content]">
        {gists.map((gist) => <Gist key={gist.id} data={gist} />)}
      </div>
    </Layout>
  )

};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
