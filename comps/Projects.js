import React from 'react'
import Section from './Section'
import Card from './Card'
import Fade from 'react-reveal/Fade'
import Button from './Button'
import {projects} from './Utils'

export default function ProgressBar(props) {


    return (
        <Section header="Projects" subheader="Some of my favorite work">
            <div className="flex justify-center align-middle items-stretch flex-col flex-wrap md:flex-row">
            {projects.map((project,i) => {
                return (
                    <div key={i} className="w-full md:w-1/3 p-1 z-10 h-full">
                        {i<3 &&
                    <Fade right offset={0.1} right>
                        <Card {...project} />
                    </Fade>}
                    </div>
                )
            })}
            <div className="py-6 w-full">
            <Button alt onClick={() => window.location.href = '/projects'}>
                View All Projects
            </Button>
            </div>
            </div>
        </Section>
    )
}