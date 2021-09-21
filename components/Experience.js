import React from 'react'
import {JobCard} from './Card'
import Section from './Section'
import Button from './Button'
import Tooltip from './Tooltip'

export default function Experience(props) {
    const jobs = [
        {name: 'GuniWheel Contract Work',description:'I created several ecommerce applications and help maintain the website to maximize online sales and user experience.', role: 'Software Developer', dates: 'March 2021 - Current', image: 'https://images.squarespace-cdn.com/content/v1/5ade3fab85ede16183421c85/1585249210421-94JMA8MEY9P1O5GLLCKY/GUNIWHEEL_with_slogan.png?format=1500w'},
        {name: 'Athlete Analytics Contract Work',description:'', role: 'Software Engineer', dates: 'November 2019 - December 2020', image: 'https://images.squarespace-cdn.com/content/v1/5fbd98f300d84279c7adca8b/1606847243944-E39IVH0XEOEAZPE3I15Y/Athlete+Analytics+Logo+02.png?format=1500w'},
        {name: 'Optimed Health', role: 'Software Engineer',description:'', dates: 'August 2019 - March 2021',image:'https://secure.optimedhealth.com/static/media/OptiMed_Logo.bdb8ed15.png'},
        
    ]



    return (
        <Section header="Experience" subheader="Companies that I've worked for">
            <div className="flex flex-wrap space-y-1 justify-center">
                {jobs.map((job,i) => {
                    return (
                        <div key={i} className="w-full">
                            <JobCard {...job}/>
                        </div>
                    )
                })}
            </div>
        </Section>
    )
}

export const JobIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
    )
}