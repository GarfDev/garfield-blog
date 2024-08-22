import { Link } from 'gatsby';
import React from 'react';

interface Props {
  className?: string;
}

const Nav = ({ className }: Props) => {
  return <nav className={'w-full flex justify-between ' + className}>
    <Link to='/' className='duration-[200ms] ease-in-out hover:scale-[1.02]'>
      <p className={'text-2xl font-black title-gradient'}>meocam</p>
    </Link>

    <div className='flex items-end'>
      <span className='mr-1 text-sm font-thin'>by</span>
      <img className='rounded-full' src="https://avatars.githubusercontent.com/u/54764688?s=400&u=ad8a2a34d2cdce1c699fc36164b8bee838682f46&v=4" width={25} />
    </div>
  </nav>
}

export default Nav;