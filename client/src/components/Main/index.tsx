import React, { useEffect, useState } from 'react'
import Timeline from './Timeline'
import Graph from './Graph'
import NoData from './NoData'
import Contributors from './Contributors'
import { getEvents } from '../../api'

const Main = ({repositoryRequest, currentRepo, loading}:any) => {

  return (
    <div className='w-full h-full flex flex-row items-start justify-center'>
      {
        currentRepo !== undefined ?
        <>
          <Timeline currentRepo={currentRepo} loading={loading} />
          <div className='w-1/2 h-full flex flex-col ml-2.5'>
            <Graph currentRepo={currentRepo} loading={loading} />
            <Contributors currentRepo={currentRepo} />
          </div>
        </>
        :
        <NoData />
      }
    </div>
  )
}

export default Main
