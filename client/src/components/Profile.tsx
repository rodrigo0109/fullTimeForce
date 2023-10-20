import React from "react"
import { useAuth0 } from "@auth0/auth0-react"

const Profile = () => {

    const { user } = useAuth0()
    //console.log("INFO", user)
  return (
    <div className="flex flex-row items-center">
        <img className="w-10 h-10 rounded-full" src={user?.picture} alt="Rounded avatar"></img>
        <span className="ml-2.5 text-white">{user?.nickname}</span>
    </div>
  )
}

export default Profile
