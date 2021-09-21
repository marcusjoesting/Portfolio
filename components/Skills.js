import React from 'react'
import Section from './Section'
import html from './images/html.png'
import css from './images/css-3.png'
import javascript from './images/javascript.png'
import aws from './images/aws.png'
import fire from './images/fire.png'
import react from './images/react.png'
import webflow from './images/webflow.png'
import photoshop from './images/photoshop.png'
import python from './images/python.png'
import Image from 'next/image'
import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from 'react-alice-carousel'


export default function Skills(props) {
    const skills = [
        {name: 'HTML', rating: 97, pic: html, color: '#F5460B'}, 
        {name: 'CSS', rating: 85, pic: css, color: '#1C73BA'},
        {name: 'JavaScript', rating: 92,pic:javascript, color: '#F7E116'},
        {name: 'React.js', rating: 90,pic:react, color: '#7DE0FE'},
        {name: 'Python', rating: 70,pic: python},
        {name: 'Firebase', rating: 85, pic: fire},
        {name: 'AWS', rating: 65, pic: aws},
        {name: 'Webflow', rating: 90, pic: webflow},
        {name: 'Photoshop', rating: 65, pic: photoshop},
    ]

    let responsive = {
        0: { items: 4 },
        640: { items: 4},
        1024: { items: 6 },
        1480: {items: 8},
    }
    return (
        <Section header="Skills" subheader="My specialties">
        <   div className="flex w-full flex-col md:flex-row justify-center align-middle items-center py-10 bg-white bg-opacity-30">
               
                <AliceCarousel
                    responsive={responsive}
                
                
                    items={skills.map((skill,i) => {
                        return (
                            <div key={i} className="flex justify-center">
                                <Image alt={skill.name} height={60} width={60} src={skill.pic}/>
                            </div>
                        )
                    })}
                    autoPlayInterval={1000}
                    autoPlay
                    playButtonEnabled={false}
                    disableDotsControls
                    disableButtonsControls
                    infinite
                    autoPlayDirection={'ltr'}
                 />
                
            </div>
        </Section>
    
    )
}
