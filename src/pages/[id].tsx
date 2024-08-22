import React from 'react';
import type { PageProps } from "gatsby"
import Editor from '../components/Editor';
import Layout from '../components/Layout';

const IndexRoute = ({ path, params }: PageProps) => {

  const id = params['id'];

  return (
    <Layout>
      <main className='min-h-[100vh] bg-black'>
        <h1>Path: {id}</h1>
        <Editor />
      </main>
    </Layout>
  )
}

export default IndexRoute
