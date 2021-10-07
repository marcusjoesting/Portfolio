import React from 'react'
import Fade from 'react-reveal/Fade'
import Button from './Button'
import Section from './Section'
import { Link } from 'react-scroll'
import Image from 'next/image'
import prof from './images/prof.jpg'
import Laptop from './Laptop'

export default function HeroSection(props) {
    const taglines = [
        '  I build web applications',
        'I create ecommerce software',
        'I develop mini apps quickly',
        'I help business grow',
        'I work well with a team',
        'I understand objectives',

    ]
    return (
        <Section>

        <div className="relative min-h-screen flex flex-col md:flex-row px-5 md:px-10  text-black shadow-lg w-full justify-center items-center align-middle font-mono z-10">
                <div className="md:w-1/2 w-full h-screen">
                  <Laptop/>
                </div>
        
    
            <Fade left delay={500}>
                <div className=" backdrop-filter backdrop-blur-lg filter relative flex flex-col md:w-1/2 w-full font-sans font-bold space-y-5 ">
                <div className='w-full  p-4 flex flex-wrap'>
                    <h1 className="w-full text-7xl text-white">
                        Full Stack Software Engineer
                    </h1>
                    <h1 className="w-full text-xl text-black mb-10 py-5">
                        I understand problems and solve them to a high standard.
                    </h1>
                <Link to="Projects" spy={true} smooth={true} duration={500} className="pr-2">
                <Button alt>
                    View Projects
                </Button>
                </Link>
                <Link to="Contact" spy={true} smooth={true} duration={1000}>
                    <Button alt>
                        Contact Me  
                    </Button>
                </Link>
               
                </div>
            </div>
            </Fade>
         
        </div>
        </Section>
    )
}


