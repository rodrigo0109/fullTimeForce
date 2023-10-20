import React from 'react'
import { useAppSelector } from '../redux/hooks'

const RecentActivity = ({setCurrentRepo}:any) => {

    const queriesCreated = useAppSelector((state:any) => state.queries.queries)
    //console.log(queriesCreated)
  return (
    <div className='w-1/6 h-[60%] rounded-2xl text-center flex flex-col pt-2.5'>
        <h3 className='text-2xl text-white tracking-wider'>Recent activity</h3>
        <div className='w-full h-full mt-5'>
           {
                queriesCreated.length > 0 &&
                queriesCreated.map((q:any,i:number) => (
                    <button key={i} className='w-[80%] h-[35px] rounded-md bg-gray-200 hover:bg-blue-600 text-sm mt-2.5' onClick={() => setCurrentRepo(q.repo)}>
                        {q.owner} - {q.repo}
                    </button>
                ))
            }
        </div>
    </div>
  )
}

export default RecentActivity
