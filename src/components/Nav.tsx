import React from 'react';
import { Link } from 'gatsby';
import { useRecoilValue } from 'recoil';

import githubAuthorSelector from '../atoms/github-profile.selector';

interface Props {
  className?: string;
}

const Nav = ({ className }: Props) => {

  const author = useRecoilValue(githubAuthorSelector)

  return <nav className={'w-full flex justify-between ' + className}>
    <Link to='/' className='duration-[200ms] flex items-center ease-in-out hover:scale-[1.02]'>
      <p className={'text-2xl font-black title-gradient'}>{author.name}</p>
    </Link>

    <div className='flex items-center select-none'>
      <span className='mr-1 text-sm font-thin'>by</span>
      <img className='rounded-full' src={author.avatar_url} width={25} />
    </div>
  </nav>
}

export default Nav;