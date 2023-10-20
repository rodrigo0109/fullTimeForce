import React from 'react'
import RecentActivity from './RecentActivity'
import Timeline from './Timeline'

const Main = ({currentRepo, setCurrentRepo}:any) => {
  return (
    <div className='w-full h-[500px] flex'>
      <RecentActivity setCurrentRepo={setCurrentRepo} />
      <Timeline currentRepo={currentRepo} />
    </div>
  )
}

export default Main
