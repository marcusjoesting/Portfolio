import React from 'react'
import Background from './Background'
import ContactForm from './ContactForm'
import Footer from './Footer'
import Navigation from './Navigation'

export default function ContactPage(props) {
    return(
        <>
        <Background/>
        <div className="bg-gradient-to-r from-purple-500 to-green-500 min-h-screen">
            <Navigation relative/>
                <ContactForm/>
             
            <Footer/>
        </div>
        </>
    )
}