import React, { ChangeEvent, FormEvent, useState } from 'react'
import { createCommits, createQueryRequest } from '../api';
import { useAppSelector } from '../redux/hooks';

const Header = () => {

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
    //chequeo si existe la query
    const queryExist = queriesCreated.some((item:any) => item.owner === repositoryRequest.owner && item.repo === repositoryRequest.repo);
    if(queryExist) return console.log("ya existe, no hacemos ninguna op a la base")
    //traigo commits en base a la query
    const commits = await createCommits(repositoryRequest)
    console.log("RES",commits)
    //la query es nueva, pero chequeo que tenga commits para mostrar
    if(commits && commits.data.length > 0){
      const res = await createQueryRequest(repositoryRequest)
      console.log("CREO QUERY", res?.data)
    } else {
      return console.log("No hay commits para mostrar")
    }
  }

  return (
    <div className='w-full h-[300px] flex flex-col items-center pt-10'>
      <h1 className='text-white text-5xl'>Welcome to <strong className='text-blue-600'>commit</strong> explorer<span className='text-blue-600'>.</span></h1>
      <form className=' w-1/2 m-auto flex flex-row justify-evenly' onSubmit={handleSubmit}>
        <div className="relative w-1/3 px-2">
            <input 
              type="text" 
              id="owner" 
              name="owner" 
              className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-gray-100 rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-600 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
              placeholder=" "
              onChange={handleInputChange} 
            />
            <label htmlFor="owner" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-tansparent dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-4 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Github user</label>
        </div>
        <div className="relative w-1/3 px-2">
            <input 
              type="text" 
              id="repo" 
              name="repo" 
              className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-gray-100 rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-600 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
              placeholder=" "
              onChange={handleInputChange} 
            />
            <label htmlFor="repo" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-transparent dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-4 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Repository name</label>
        </div>
        <button type="submit" className="w-1/4 h-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Search</button>
      </form>
    </div>
  )
}

export default Header
