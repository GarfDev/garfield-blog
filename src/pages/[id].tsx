import { Link, type PageProps } from "gatsby";
import React from 'react';
import Markdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { useRecoilValue } from 'recoil';
import { rehypeAccessibleEmojis } from 'rehype-accessible-emojis'
import rehypeClassNames from 'rehype-class-names';
import rehypeHighlight from 'rehype-highlight';
import remarkGfm from 'remark-gfm';
import gistSelector from '../atoms/gist.selector';
import Layout from '../components/Layout';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism'

const markdownClassname = {
  '*': 'my-2',
  'h1': 'text-6xl my-6 font-bold title-gradient',
  'h2': 'text-5xl my-5 font-bold title-gradient',
  'h3': 'text-4xl my-4 font-bold title-gradient',
  'h4': 'text-3xl my-3 font-bold title-gradient',
  'h5': 'text-2xl font-bold title-gradient',
  'h6': 'text-xl font-bold title-gradient',
  'a': 'visited:text-gray-500 font-bold cursor-pointer hover:text-gray-300 duration-100',
  'pre': 'p-2 !bg-gray-700 [&_pre]:!bg-gray-700 [&_pre]:!font-bold',
  'hr': 'title-gradient'
}

const IndexRoute = ({ path, params }: PageProps) => {

  const id = params['id'];

  const gist = useRecoilValue(gistSelector({ id }))

  return (
    <Layout>
      <main className='min-h-[100vh] '>
        <div className='w-full min-h-[300px]'>
          <Markdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeHighlight, rehypeAccessibleEmojis, [rehypeClassNames, markdownClassname]]}
            components={{
              code({ node, className, children, ref, ...rest }) {
                const match = /language-(\w+)/.exec(className || "");
                return (
                  match ? (
                    <SyntaxHighlighter
                      children={String(children).replace(/\n$/, "")}
                      language={match?.[1] || undefined}
                      style={{...dracula}}
                    />
                  )
                    : (
                      <code {...rest} className={className}>
                        {children}
                      </code>
                    )
                )
              }
            }}>
            {`${gist.files[Object.keys(gist.files)[0]].content}`}
          </Markdown>
        </div>
      </main>
    </Layout >
  )
}

export default IndexRoute
