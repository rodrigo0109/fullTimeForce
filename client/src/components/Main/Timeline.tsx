import React from 'react'
import { useAppSelector } from '../../redux/hooks'
import { Spinner } from 'flowbite-react';
import moment from 'moment';

const Timeline = ({currentRepo, loading}:any) => {

    const queriesCreated = useAppSelector((state:any) => state.queries.queries)

  return (
    <div className='relative w-1/2 h-[80%] ml-10 overflow-y-auto overflow-x-hidden scroll px-2 flex items-center justify-center mr-2.5'>
      {
        !loading ?
        <>
          <h3 className='absolute top-0 text-[#9e57ff] sm:text-md 2xl:text-xl font-semibold'>{currentRepo.repo}</h3>
          <ol className="ml-5 w-full absolute top-10 border-l border-[#9e57ff] dark:border-gray-700 flex flex-col items-start justify-center pr-2">
            {
              queriesCreated.filter((q:any) => q.repo === currentRepo.repo)[0]?.commits.length > 0 && 
              queriesCreated.filter((q:any) => q.repo === currentRepo.repo)[0]?.commits.map((t:any,i:number) => (
                  <li key={i} className="mb-10 ml-4">
                      <div className="absolute w-3 h-3 bg-gray-600 rounded-full mt-1.5 -left-1.5 border border-[#9e57ff] dark:border-gray-900 dark:[#9e57ff]"></div>
                      <time className="mb-1 sm:text-xs 2xl:text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{moment(t.date).format("MM-DD-YY")}</time>
                      <h3 className="sm:text-xs 2xl:text-lg font-semibold text-white dark:text-white">{t.message}</h3>
                      <a href={t.commitUrl} target='_blank' className="inline-flex items-center mt-2 px-4 py-2 sm:text-[8px] 2xl:text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-[#9e57ff] transition-all duration-200 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">
                          Learn more 
                          <svg className="sm:w-2 sm:h-2 2xl:w-3 2xl:h-3 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
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
          color='purple'
        />
      }
    </div>
  )
}

export default Timeline
