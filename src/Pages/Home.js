import React from 'react'
import Discussion from '../Components/Discussion'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import LatestProjects from '../Components/LatestProjects'
import ServiceOffer from '../Components/ServiceOffer'
import SkillsAndExperience from '../Components/SkillsAndExperience'
import Spotlight from '../Components/Spotlight'
import Testimonials from '../Components/Testimonials'
function Home() {
  return (
    <div>
      <div className="container">
			<Header/>
			<Spotlight/>
			<ServiceOffer/>
      <SkillsAndExperience/>
      <LatestProjects/>
      <Testimonials/>
      <Discussion/>
      <Footer/>
      </div>
    </div>
  )
}

export default Home