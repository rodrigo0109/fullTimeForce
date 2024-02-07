import React from "react"
import { useAuth0 } from "@auth0/auth0-react"


const LoginButon = () => {
    
    const { loginWithRedirect } = useAuth0()

    return (
        <button 
            className="w-full h-full sm:flex sm:items-center sm:justify-center text-white bg-[#9e57ff] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg sm:text-sx 2xl:text-sm px-5 2xl:py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 transition-all duration-300"
            onClick={() => loginWithRedirect()}
        >
            Sign In
        </button>
    )
}
export default LoginButon