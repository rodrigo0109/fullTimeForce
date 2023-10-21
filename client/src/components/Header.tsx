import React, { ChangeEvent, FormEvent, useState } from 'react'
import { createCommits, createQueryRequest, getNewCommits } from '../api';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { useAuth0 } from '@auth0/auth0-react';
import { fetchData } from '../functions';

const Header = ({setCurrentRepo, setLoading, setAlert}:any) => {

  const { user, isAuthenticated } = useAuth0()
  const dispatch = useAppDispatch()
  const [repositoryRequest, setRepositoryRequest] = useState({owner:'', repo:''})
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
      setCurrentRepo(repositoryRequest.repo)
      setRepositoryRequest({owner:'', repo:''})
      await getNewCommits(repositoryRequest)
      await fetchData(dispatch)
      setLoading(false)
      return 
    } 
    const commits = await createCommits(repositoryRequest)
    //the query is new, but checks if there are commits to show
    if(commits && commits.data.length > 0){
      const res = await createQueryRequest(repositoryRequest)
      setCurrentRepo(repositoryRequest.repo)
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
    <div className='relative w-full sm:h-[170px] 2xl:h-[300px] flex flex-col items-center sm:pt-5 2xl:pt-10'>
      {
        isAuthenticated ?
        <h1 className='text-white sm:text-3xl 2xl:text-5xl'>Hi <strong className='text-[#49AEEA]'>{user?.nickname}</strong>, welcome to <strong className='text-[#49AEEA]'>commit</strong> explorer<span className='text-[#49AEEA]'>.</span></h1>
        :
        <h1 className='text-white sm:text-3xl 2xl:text-5xl'>Welcome to <strong className='text-[#49AEEA]'>commit</strong> explorer<span className='text-[#49AEEA]'>.</span></h1>
      }
      <form className=' w-1/2 m-auto flex flex-row justify-evenly' onSubmit={handleSubmit}>
        <div className="relative w-1/3 px-2">
            <input 
              type="text" 
              id="owner" 
              name="owner" 
              className="block sm:h-[70%] 2xl:h-full px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-gray-100 rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-600 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
              placeholder=" "
              value={repositoryRequest.owner}
              onChange={handleInputChange} 
            />
            <label htmlFor="owner" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-tansparent dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-4 peer-focus:scale-75 peer-focus:-translate-y-4 left-2">Github user</label>
        </div>
        <div className="relative w-1/3 px-2">
            <input 
              type="text" 
              id="repo" 
              name="repo" 
              className="block sm:h-[70%] 2xl:h-full px-2.5 pb-2.5 sm:pt-2 2xl:pt-4 w-full text-sm text-gray-900 bg-gray-100 rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-600 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
              placeholder=" "
              value={repositoryRequest.repo}
              onChange={handleInputChange} 
            />
            <label htmlFor="repo" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-transparent dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-4 peer-focus:scale-75 peer-focus:-translate-y-4 left-2">Repository name</label>
        </div>
        <button type="submit" className="w-1/4 flex items-center justify-center sm:h-[70%] 2xl:h-full text-white bg-[#49AEEA] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 transition-all duration-300">Search</button>
      </form>
    </div>
  )
}

export default Header
