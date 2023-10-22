import React from "react"
import { useAuth0 } from "@auth0/auth0-react"

const Profile = () => {

    const { user } = useAuth0()

  return (
    <div className="flex flex-row items-center">
        <img className="2xl:w-10 sm:w-5 sm:h-5 2xl:h-10 rounded-full" src={user?.picture} alt="Rounded avatar"></img>
        <span className="ml-2.5 text-white sm:text-xs 2xl:text-lg">{user?.nickname}</span>
    </div>
  )
}

export default Profile
