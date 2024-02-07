import React, { useEffect } from 'react'
import { useAppDispatch } from '../redux/hooks'
import { useAuth0 } from '@auth0/auth0-react'
import LoginButon from './LoginButton'
import LogoutButton from './LogoutButton'
import Profile from './Profile'
import { fetchData } from '../functions'

const NavBar = () => {

    const { user, isAuthenticated } = useAuth0()
    const dispatch = useAppDispatch()

    useEffect(() => {
        fetchData(dispatch)
    }, [])

  return (
    <div className='w-full sm:h-[40px] 2xl:h-[60px] flex flex-row items-center justify-between'>
       {
        isAuthenticated ?
        <h1 className='text-white sm:text-sm 2xl:text-xl ml-5'>Hi <strong className='text-[#9e57ff]'>{user?.nickname}</strong>, welcome to <strong className='text-[#9e57ff]'>commit</strong> explorer<span className='text-[#9e57ff]'>.</span></h1>
        :
        <h1 className='text-white sm:text-sm 2xl:text-xl ml-5'>Welcome to <strong className='text-[#9e57ff]'>commit</strong> explorer<span className='text-[#9e57ff]'>.</span></h1>
      }
      <div className='ml-5'>
        {
          isAuthenticated &&
          <Profile />
        }
      </div>
      {/* <div className='w-[120px] h-[70%] mr-5'>
        {
          !isAuthenticated ?
          <LoginButon />
          :
          <LogoutButton />
        }
      </div> */}
    </div>
  )
}

export default NavBar
