import React, { useEffect } from 'react'
import { useAppDispatch } from '../redux/hooks'
import { getCommits, getQueries } from '../api'
import { saveCommits, saveQueries } from '../redux/features/actions/queries'
import { useAuth0 } from '@auth0/auth0-react'
import LoginButon from './LoginButton'
import LogoutButton from './LogoutButton'
import Profile from './Profile'

const NavBar = () => {

    const { isAuthenticated } = useAuth0()
    const dispatch = useAppDispatch()

    useEffect(() => {
        const fetchData = async() => {
            const queries = await getQueries()
            if(queries && queries.data.length > 0){
                dispatch(saveQueries(queries.data))
            }
            const allCommits = await getCommits()
            console.log("ALL COMMITS", allCommits?.data)
            if(allCommits && allCommits.data.length > 0){
              dispatch(saveCommits(allCommits.data))
          }
        }
        fetchData()
    }, [])

  return (
    <div className='w-full h-[60px] flex flex-row items-center justify-between'>
      <div className='ml-5'>
        {
          isAuthenticated &&
          <Profile />
        }
      </div>
      <div className='w-[120px] h-[70%] mr-5'>
        {
          !isAuthenticated ?
          <LoginButon />
          :
          <LogoutButton />
        }
      </div>
    </div>
  )
}

export default NavBar
