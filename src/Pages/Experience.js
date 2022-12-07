import React from 'react'
import ExperienceList from '../Components/ExperienceList'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import SkillList from '../Components/SkillList'
import SkillsSpotlight from '../Components/SkillsSpotlight'

function Experience() {
  return (
    <div>
      <Header/>
      <SkillsSpotlight/>
      <SkillList/>
      <ExperienceList/>
      <Footer/>
    </div>
  )
}

export default Experience