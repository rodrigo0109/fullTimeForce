import React, { useEffect } from 'react'
import { useAppDispatch } from '../redux/hooks'
import { useAuth0 } from '@auth0/auth0-react'
import LoginButon from './LoginButton'
import LogoutButton from './LogoutButton'
import Profile from './Profile'
import { fetchData } from '../functions'

const NavBar = () => {

    const { isAuthenticated } = useAuth0()
    const dispatch = useAppDispatch()

    useEffect(() => {
        fetchData(dispatch)
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
