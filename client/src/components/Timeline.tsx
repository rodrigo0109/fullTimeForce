import React from 'react'
import { useAppSelector } from '../redux/hooks'
import { Spinner } from 'flowbite-react';
import moment from 'moment';

const Timeline = ({currentRepo, loading}:any) => {

    const queriesCreated = useAppSelector((state:any) => state.queries.queries)

  return (
    <div className='relative w-1/3 ml-10 overflow-y-auto overflow-x-hidden scroll px-2 flex items-center justify-center'>
      {
        !loading ?
        <>
          <h3 className='absolute top-0 text-[#49AEEA] text-xl font-semibold'>{currentRepo}</h3>
          <ol className="ml-5 w-full absolute top-10 border-l border-gray-600 dark:border-gray-700 flex flex-col items-start justify-center pr-2">
            {
              queriesCreated.filter((q:any) => q.repo === currentRepo)[0]?.commits.length > 0 && 
              queriesCreated.filter((q:any) => q.repo === currentRepo)[0]?.commits.map((t:any,i:number) => (
                  <li key={i} className="mb-10 ml-4">
                      <div className="absolute w-3 h-3 bg-gray-600 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                      <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{moment(t.date).format("MM-DD-YY")}</time>
                      <h3 className="text-lg font-semibold text-white dark:text-white">{t.message}</h3>
                      <a href={t.commitUrl} target='_blank' className="inline-flex items-center mt-2 px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">
                          Learn more 
                          <svg className="w-3 h-3 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                          </svg>
                      </a>
                  </li>
              ))
            }
          </ol>
        </>
        :
        <Spinner
          aria-label="Extra small spinner example"
          size="xl"
        />
      }
    </div>
  )
}

export default Timeline
