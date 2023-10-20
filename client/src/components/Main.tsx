import React from 'react'
import RecentActivity from './RecentActivity'
import Timeline from './Timeline'

const Main = ({currentRepo, setCurrentRepo, loading}:any) => {
  return (
    <div className='w-full h-[500px] flex'>
      <RecentActivity setCurrentRepo={setCurrentRepo} />
      <Timeline currentRepo={currentRepo} loading={loading} />
    </div>
  )
}

export default Main
