import React from 'react'
import Button from './Button'
import Section from './Section'
import prof from './images/prof.png'
import Image from 'next/Image'
export default function(props) {
    return (
        <div>
            <Section header="About Me" subheader="My hobbies, interests and passions">
                <div className="flex flex-wrap justify-center items-center text-black bg-white shadow-xl">
           
                <div className='w-full md:w-1/3 shadow-xl'>
                        <Image className='object-cover' src={prof}/>
                    </div>
                    <div className='w-full md:w-2/3 px-10 flex flex-col space-y-5'>
                        <h1 className="text-2xl md:text-4xl font-bold mt-5 text-center md:text-left">
                            Sean Marcus Joesting
                        </h1>
                        <h4 >
                            I'm a full stack software engineer who has a love for explorting the unknown.
                            Learning is one of the most enjoyable and productive things you can do in life 
                            and I strive to grow everyday. My professional experience is mostly working with React.js and front end development
                            with cloud solution integration. I've worked in ecommerce, insurance, the automotive industry and more.
                            On the side I enjoy playing with 3D modeling in the web, cryptocurrency, smart contracts, machine Learning
                            and more! Software has endless exciting possibilities and I plan exploring them for the rest of my life.
                        </h4>
                        <div className="pb-10 md:pb-0 w-full text-center md:text-left">
                        <Button>Contact Me</Button>
                        </div>
                        
                    </div>

                </div>
              
            </Section>
        </div>
    )
}