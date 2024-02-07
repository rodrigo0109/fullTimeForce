import React, { ChangeEvent, FormEvent, useState } from 'react'
import { createCommits, createQueryRequest, getEvents, getNewCommits } from '../../api';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { useAuth0 } from '@auth0/auth0-react';
import { fetchData } from '../../functions';
import RecentActivity from './RecentActivity';

const SideBar = ({repositoryRequest, setRepositoryRequest, setCurrentRepo, setLoading, setAlert}:any) => {

  const { user, isAuthenticated } = useAuth0()
  const dispatch = useAppDispatch()
  const queriesCreated = useAppSelector((state:any) => state.queries.queries)

  const handleInputChange = (e:ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRepositoryRequest({
      ...repositoryRequest,
      [name]: value
    })
  }

  const handleSubmit = async(e:FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    //if query alrready exist
    const queryExist = queriesCreated.some((item:any) => item.owner === repositoryRequest.owner && item.repo === repositoryRequest.repo);
    if(queryExist) {
      setCurrentRepo({repo: repositoryRequest.repo, owner: repositoryRequest.owner})
      getEvents(repositoryRequest.owner, dispatch)
      setRepositoryRequest({owner:'', repo:''})
      await getNewCommits(repositoryRequest)
      await fetchData(dispatch)
      setLoading(false)
      return 
    } 
    const commits = await createCommits(repositoryRequest)
    //the query is new, but checks if there are commits to show
    if(commits && commits.data.length > 0){
      await createQueryRequest(repositoryRequest)
      setCurrentRepo({repo: repositoryRequest.repo, owner: repositoryRequest.owner})
      getEvents(repositoryRequest.owner, dispatch)
      await fetchData(dispatch)
      setLoading(false)
      setRepositoryRequest({owner:'', repo:''})
    } else {
      setAlert(true)
      setLoading(false)
      setRepositoryRequest({owner:'', repo:''})
      return
    }
  }

  return (
    <div className='relative w-1/6 h-full flex flex-col items-center justify-start sm:pt-5 2xl:pt-10'>
      <form className=' w-full sm:h-[170px] 2xl:h-[250px] flex flex-col justify-evenly px-5' onSubmit={handleSubmit}>
        <div className="relative w-full">
            <input 
              type="text" 
              id="owner" 
              name="owner" 
              className="block sm:h-[35px] 2xl:h-[45px] px-2.5 pb-2.5 pt-4 w-full sm:text-xs 2xl:text-sm text-gray-900 bg-gray-100 rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-600 focus:outline-none focus:ring-0 focus:border-[#9e57ff] peer" 
              placeholder=" "
              value={repositoryRequest.owner}
              onChange={handleInputChange} 
            />
            <label htmlFor="owner" className="absolute sm:text-xs 2xl:text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-tansparent dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-[#9e57ff] peer-focus:dark:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-4 peer-focus:scale-75 peer-focus:-translate-y-4 left-2">Github user</label>
        </div>
        <div className="relative w-full">
            <input 
              type="text" 
              id="repo" 
              name="repo" 
              className="block sm:h-[35px] 2xl:h-[45px] px-2.5 pb-2.5 sm:pt-2 2xl:pt-4 w-full sm:text-xs 2xl:text-sm text-gray-900 bg-gray-100 rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#9e57ff] focus:outline-none focus:ring-0 focus:border-[#9e57ff] peer" 
              placeholder=" "
              value={repositoryRequest.repo}
              onChange={handleInputChange} 
            />
            <label htmlFor="repo" className="absolute sm:text-xs 2xl:text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-transparent dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-[#9e57ff] peer-focus:dark:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-4 peer-focus:scale-75 peer-focus:-translate-y-4 left-2">Repository name</label>
        </div>
        <button type="submit" className="w-full flex items-center justify-center sm:h-[35px] 2xl:h-[45px] text-white bg-[#9e57ff] hover:bg-opacity-80 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg sm:text-xs 2xl:text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 transition-all duration-300">Search</button>
      </form>
      <RecentActivity setCurrentRepo={setCurrentRepo} setLoading={setLoading} />
    </div>
  )
}

export default SideBar
