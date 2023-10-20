import React, { useState } from 'react'
import NavBar from './NavBar'
import Header from './Header'
import Main from './Main'

const Home = () => {

    const [currentRepo, setCurrentRepo] = useState()

  return (
    <div className="w-full h-full">
      <NavBar />
      <Header setCurrentRepo={setCurrentRepo} />
      <Main currentRepo={currentRepo} setCurrentRepo={setCurrentRepo} />
    </div>
  )
}

export default Home
