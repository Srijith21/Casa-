import React from 'react'
import EnquiryDiscussion from '../Components/EnquiryDiscussion'
import EnquiryForm from '../Components/EnquiryForm'
import EnquirySpotlight from '../Components/EnquirySpotlight'
import Footer from '../Components/Footer'
import Header from '../Components/Header'

function Enquiry() {
  return (
    <div>
      <Header/>
      <EnquirySpotlight/>
      <EnquiryForm/>
      <EnquiryDiscussion/>
      <Footer/>
    </div>
  )
}

export default Enquiry