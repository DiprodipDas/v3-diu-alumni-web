import React from 'react'
import HeroSection from './HeroSection'
import ToolSection from './ToolSection'
import CompanyLogos from './CompanyLogos'
import Services from './Services'
import Testimonials from './Testimonials'
import Blogs from './Blogs'
import TeamSection from './TeamSection'
import Pricing from './Pricing'
import FAQs from './FAQs'
import Newsletter from './Newsletter'
import AlumniAcordians from './AlumniAcordians'

const Home = () => {
  return (
    <>
    <AlumniAcordians></AlumniAcordians>
    <HeroSection></HeroSection>
    <ToolSection></ToolSection>
    <CompanyLogos></CompanyLogos>
    <Services></Services>
    <Testimonials></Testimonials>
    <Blogs></Blogs>
    <TeamSection></TeamSection>
    <Pricing></Pricing>
    <FAQs></FAQs>
    <Newsletter></Newsletter>
    </>
  )
}

export default Home