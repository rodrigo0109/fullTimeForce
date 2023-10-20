import React, { useEffect } from 'react'
import { useAppDispatch } from '../redux/hooks'
import { getCommits, getQueries } from '../api'
import { saveCommits, saveQueries } from '../redux/features/actions/queries'

const NavBar = () => {

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
    <div>
      
    </div>
  )
}

export default NavBar
