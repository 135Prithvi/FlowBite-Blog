import Link from 'next/link'
import { getSortedPostsData } from '../../lib/posts'

export async function getStaticProps() {
  const _allPostsData = getSortedPostsData()
  return {
    props: {
      _allPostsData,
    },
  }
}

export default function blogpost({_allPostsData}:any) {

  
  return (
    <>
      <main className="mt-6 flex max-w-full flex-wrap items-center justify-around sm:w-full mx-5 " >
        <div className="container  flex w-full flex-1 flex-col items-center justify-center px-20 text-center ">
          <a >
            <section className=" " >
              {_allPostsData.map(({ id, date, title }: any)  => ( 
                <> 
                <div className="block border-double border-4 border-sky-900 max-w-full text-white hover:cursor-pointer rounded-lg  p-6 my-8 shadow-md hover:bg-gray-100 dark:border-gray-700 dark:bg-cyan-500 dark:hover:bg-gray-700">
                <Link href={`/posts/${id}`}>
                  <h5 key={id} className="mb-2 text-2xl  font-bold tracking-tight text-gray-900 hover:text-black dark:text-white">
                    {title}
                  </h5>
                </Link><p className="font-normal text-gray-700 dark:text-black" key={title}>
                    {date}
                  </p></div></>
              ))}
              
            </section>
          </a>
        </div>
      </main>
    </>
  )
}
