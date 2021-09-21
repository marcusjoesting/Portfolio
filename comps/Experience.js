import React from 'react'
import {JobCard} from './Card'
import Section from './Section'
import AthleteLogo from './images/athletelogo.png'
import url from './images/url.png'



export default function Experience(props) {
    const jobs = [
        {name: 'GuniWheel Freelance',description:'I created several ecommerce applications and help maintain the website to maximize online sales and user experience.', role: 'Software Developer', dates: 'March 2021 - Current', image: 'https://images.squarespace-cdn.com/content/v1/5ade3fab85ede16183421c85/1585249210421-94JMA8MEY9P1O5GLLCKY/GUNIWHEEL_with_slogan.png?format=1500w'},
        {name: 'Athlete Analytics Freelance',description:'', role: 'Software Engineer', dates: 'November 2019 - December 2020', image: 'https://images.squarespace-cdn.com/content/v1/5fbd98f300d84279c7adca8b/1606847243944-E39IVH0XEOEAZPE3I15Y/Athlete+Analytics+Logo+02.png?format=1500w'},
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