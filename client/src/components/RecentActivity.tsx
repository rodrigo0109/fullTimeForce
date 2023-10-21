import React from 'react'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { getNewCommits } from '../api'
import { fetchData } from '../functions'

const RecentActivity = ({setCurrentRepo, setLoading}:any) => {

    const dispatch = useAppDispatch()
    const queriesCreated = useAppSelector((state:any) => state.queries.queries)
    const handleUpdate = async(owner:string, repo:string) => {
        setLoading(true)
        setCurrentRepo(repo)
        await getNewCommits({owner, repo})
        await fetchData(dispatch)
        setLoading(false)
    }
    //console.log(queriesCreated)
  return (
    <div className='w-1/6 h-[60%] rounded-2xl text-center flex flex-col pt-2.5'>
        <h3 className='sm:text-md 2xl:text-2xl text-white tracking-wider'>Recent activity</h3>
        <div className='w-full h-full mt-5'>
           {
                queriesCreated.length > 0 &&
                [...queriesCreated].reverse().slice(0,5).map((q:any,i:number) => (
                    <button key={i} className='sm:w-[85%] 2xl:w-[80%] sm:h-[25px] 2xl:h-[35px] rounded-md bg-gray-200 hover:bg-[#49AEEA] sm:text-[10px] 2xl:text-sm mt-2.5 transition-all duration-300' onClick={() => handleUpdate(q.owner, q.repo)}>
                        {q.owner} - {q.repo}
                    </button>
                ))
            }
        </div>
    </div>
  )
}

export default RecentActivity
