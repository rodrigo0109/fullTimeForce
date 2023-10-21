import React from "react"
import { useAuth0 } from "@auth0/auth0-react"

const Profile = () => {

    const { user } = useAuth0()
    //console.log("INFO", user)
  return (
    <div className="flex flex-row items-center">
        <img className="2xl:w-10 sm:2-5 sm:h-5 2xl:h-10 rounded-full" src={user?.picture} alt="Rounded avatar"></img>
        <span className="ml-2.5 text-white sm:text-xs">{user?.nickname}</span>
    </div>
  )
}

export default Profile
