import React from 'react'
import DashBoard from '../Components/DashBoard'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import MobApps from '../Components/MobApps'
import ProjectSpotlight from '../Components/ProjectSpotlight'
import WebApps from '../Components/WebApps'
import Websites from '../Components/Websites'

function Project() {
  return (
    <div>
      <Header/>
      <ProjectSpotlight/>
      <WebApps/>
      <MobApps/>
      <DashBoard/>
      <Websites/>
      <Footer/>
    </div>
  )
}

export default Project
