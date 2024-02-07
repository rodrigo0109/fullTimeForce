import React, { useEffect, useState } from 'react'
import { getContributors } from '../../api'
import { Spinner } from 'flowbite-react'

const Contributors = ({currentRepo}) => {
    
    const [contributors, setContributors] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
      if(currentRepo){
        setLoading(true)
        getContributors(currentRepo, setContributors)
        setLoading(false)
      }
      console.log("events", contributors)
    }, [currentRepo])
    
  return (
    <div className='w-full h-[30%] flex flex-col text-center'>
      <h4 className='text-[#9e57ff] sm:text-sm 2xl:text-lg font-semibold'>Contributors</h4>
      <div className='w-[80%] h-full m-auto flex flex-row items-start justify-start pt-10'>
        {
          !loading ?
          contributors.map((c:any,i:number) => (
            <div key={i} className='ml-5 cursor-pointer hover:opacity-80 transition-all duration-200' title={`${c.login}`}>
              <a href={c.html_url} target="_blank" rel="noopener noreferrer">
                <img className="2xl:w-10 sm:w-5 sm:h-5 2xl:h-10 rounded-full" src={c?.avatar_url} alt="Rounded avatar"></img>
              </a>
            </div>
          ))
          :
          <Spinner
            aria-label="Extra small spinner example"
            size="xl"
          />
        }
      </div>
    </div>
  )
}

export default Contributors
