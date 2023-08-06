import Link from 'next/link';
import React from 'react'
import Header from '../component/Header';

const getResults = async (keyword: string) => {
  const res = await fetch(`https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${keyword}&format=json`);
  return res.json();
};

type Props = {
  searchParams: { q: string } // searchParam values are always strings
}

export default async function search({searchParams }:Props) {
  console.log(searchParams.q);
  const wiki =  await getResults(searchParams.q);
  console.log({wiki:wiki.search});
  return (
    <>
      <Header />
      {/* {wiki.query.search[0].title} */}
      <ul>
        {wiki.query.search.map(({title, pageid, snippet}, index) => 
            <li key={index}> 
              <Link target="blank" href={`https://en.wikipedia.org/wiki?curid=${pageid}`}>{title}</Link>
              <p className='mb-half' dangerouslySetInnerHTML={{ __html: snippet }}></p>
              <div className='mb-2 ml-1' >
                <Link target="blank" href={`https://en.wikipedia.org/wiki?curid=${pageid}`}>Full article</Link>
              </div>
            </li> 
          )}
      </ul>
    </>
  )
}
