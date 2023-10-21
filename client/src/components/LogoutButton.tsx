import React from "react"
import { useAuth0 } from "@auth0/auth0-react"


const LogoutButton = () => {
    
    const { logout } = useAuth0()

    return (
        <button 
            className="w-full h-full text-white bg-[#49AEEA] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 transition-all duration-300" 
            onClick={() => logout()}
        >
            Logout
        </button>
    )
}
export default LogoutButton