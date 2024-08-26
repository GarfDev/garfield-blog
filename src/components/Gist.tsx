import React from 'react';
import { IGist } from '../types/gist';
import { Link } from 'gatsby';

interface Props {
  data: IGist;
}

const Gist = ({ data }: Props) => {

  const filename = Object.keys(data.files)[0].split('.')[0]
  // content-is-here.md
  // [content-is-here, md]
  // content-is-here
  // content is here
  const title = filename.replaceAll('-', ' ')
  const dateStr = data.updated_at;
  const date = new Date(dateStr);


  return (
    <Link to={`/${data.id}`}>
    <div key={data.id} className='flex flex-col my-12 cursor-pointer select-none'>
      <p className="mb-1 text-3xl font-black first-letter:capitalize title-gradient">{title}</p>
      <p className='text-sm mb-2 opacity-40'>
        {date.toLocaleString()}
      </p>

      <p className='text-md opacity-80'>
        {data.description}
      </p>
    </div>

    </Link>
  )
}

export default Gist