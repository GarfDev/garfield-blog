import React from 'react';
import type { PageProps } from "gatsby"
import Editor from '../components/Editor';
import Layout from '../components/Layout';
import { useRecoilValue } from 'recoil';
import gistSelector from '../atoms/gist.selector';

const IndexRoute = ({ path, params }: PageProps) => {

  const id = params['id'];

  const gist = useRecoilValue(gistSelector({ id }))

  return (
    <Layout>
      <main className='min-h-[100vh] '>
        <div className='w-full min-h-[300px]'>
          <Editor defaultValue={gist.files[Object.keys(gist.files)[0]].content} />
        </div>
      </main>
    </Layout>
  )
}

export default IndexRoute
