import React, { useEffect, useState } from 'react'
import NavBar from '../NavBar'
import SideBar from '../SideBar'
import Main from '../Main'
import { Toast } from 'flowbite-react'
import { HiExclamation } from 'react-icons/hi'

const Home = () => {

    const [currentRepo, setCurrentRepo] = useState()
    const [repositoryRequest, setRepositoryRequest] = useState({owner:'', repo:''})
    const [loading, setLoading] = useState(false)
    const [alert, setAlert] = useState(false)

  return (
    <div className="w-full h-full">
      <NavBar />
      <div className='h-[92%] flex flex-row items-center py-10'>
        <SideBar 
            repositoryRequest={repositoryRequest} 
            setRepositoryRequest={setRepositoryRequest} 
            setCurrentRepo={setCurrentRepo} 
            setLoading={setLoading} 
            setAlert={setAlert} 
        />
        <Main 
            repositoryRequest={repositoryRequest} 
            currentRepo={currentRepo} 
            setCurrentRepo={setCurrentRepo} 
            loading={loading} 
            setLoading={setLoading} 
        />
      </div>
      {
        alert &&
        <div className='absolute right-10 bottom-10 z-10' onClick={() => setAlert(false)}>
          <Toast>
            <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-orange-100 text-orange-500 dark:bg-orange-700 dark:text-orange-200">
              <HiExclamation className="h-5 w-5" />
            </div>
            <div className="ml-3 text-sm font-normal">
              There are no commits to show
            </div>
            <Toast.Toggle />
          </Toast>
        </div>
      }
    </div>
  )
}

export default Home
