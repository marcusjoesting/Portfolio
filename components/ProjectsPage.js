import React from 'react'
import {projects} from './Utils'
import Navigation from './Navigation'
import Footer from './Footer'
import Card from './Card'
import Fade from 'react-reveal/Fade'
import ContactForm from './ContactForm'
import Section from './Section'
import Background from './Background'
export default function ProjectsPage(props) {
    return(
        <>
        <Background/>
        <div className="bg-gradient-to-r from-purple-500 to-blue-300 min-h-screen w-screen">
            <Navigation relative/>
            <Section header="My Projects" subheader="Full stack software projects">
            <div className="w-full min-h-screen flex justify-center flex-wrap mb-20">
                {projects.map((project, i) => {
                    return (
                        <div key={i} className="w-full md:w-1/3 h-full z-10 p-1">
                            <Fade left right>
                                <Card {...project}/>
                            </Fade>
                        </div>
                    )
                })}
            </div>
            </Section>
            <ContactForm/>
            <Footer/>
        </div>
        </>
    )
}