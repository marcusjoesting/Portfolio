import React from 'react'
import HeroSection from './HeroSection'
import Navigation from './Navigation'
import Projects from './Projects'
import Skills from './Skills'
import Experience from './Experience'
import ContactForm from './ContactForm'
import AboutMe from './AboutMe'
import Footer from './Footer'
import Background from './Background'

export default function Home() {
    return (
      <div className="overflow-hidden max-w-screen">
      <Navigation/>
      <HeroSection/>
      <Projects/>
      <AboutMe/>
      {/* <Newsletter/> */}
      <Skills/>
      <Experience/>
      <Background/>
      <ContactForm/>
      <Footer/> 
      </div>
    )
  }