import React from 'react'
import RecentActivity from './RecentActivity'
import Timeline from './Timeline'
import Graph from './Graph'
import NoData from './NoData'

const Main = ({currentRepo, setCurrentRepo, loading}:any) => {
  return (
    <div className='w-full h-[500px] flex'>
      <RecentActivity setCurrentRepo={setCurrentRepo} />
      {
        currentRepo !== undefined ?
        <>
          <Timeline currentRepo={currentRepo} loading={loading} />
          <Graph currentRepo={currentRepo} />
        </>
        :
        <NoData />
      }
    </div>
  )
}

export default Main
