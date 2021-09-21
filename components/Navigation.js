import React from 'react'
import githubPic from './images/github.png'
import linkedPic from './images/linkedin (1).png'
import Fade from 'react-reveal/Fade'
import { Collapse } from '@material-ui/core'

import Tooltip from './Tooltip'


export default function Navigation(props) {
    const [mobileNav, setMobile] = React.useState(false)

    const links = [
        {name: 'Home', url: '/'},
        {name: 'Contact Me', url: '/contact'},
        {name: 'Projects', url: '/projects'},
        {name: 'Blog', url: '/blog'},

    ]
    return (
        <div className={props.relative ? "flex":"absolute w-screen top-0 flex"}>
        <Fade top>
        <nav className={'flex overflow-hidden w-full bg-black border-b border-white z-20 container mx-auto justify-between items-center content-center h-20 top-0'}>
                
        
            <div className="flex md:hidden cursor-pointe ml-4" onClick={() => setMobile(true)}>
                <MenuIcon/>
            </div>
  
            <div className="absolute w-screen top-0 left-0">
            <Collapse in={mobileNav} className="fixed">
           
            <div className="w-screen bg-white top-0 flex justify-center flex-col items-center">
                {links.map(link => {
                    return (
                        <div key={JSON.stringify(link)} onClick={() => window.location.href = link.url} className="w-full font-custom text-center border-b-2 border-black py-4 transistion duration-500 hover:bg-blue-500 hover:text-white cursor-pointer">
                            {link.name}
                        </div>    
                    )
                })}
            </div>
       
            </Collapse>
            </div>
          
            <div className='hidden md:flex align-middle items-center h-full'>
                {links.map((link,i) => {
                    return (
                        <a href={link.url} className="text-white text-2x transistion duration-500 mx-4 transform hover:-translate-y-1">
                            {link.name}
                        </a>
                    )
                })}
            </div>
            <div className="hidden md:flex items-center content-center justify-center font-sans bg-black p-4  rounded">
                <Tooltip placement='bottom' title="Github Profile">
                    <div className="w-8 h-8 transistion duration-500 ml-4 hover:text-white transform hover:-translate-y-1 cursor-pointer" onClick={() => window.open('https://github.com/marcusjoesting','_blank')}>
                        <img src={githubPic}/>
                    </div>
                </Tooltip>
                <Tooltip placement='bottom' title="LinkedIn Profile">
                    <div className="w-8 h-8 transistion duration-500 ml-4 hover:text-white transform hover:-translate-y-1 cursor-pointer" onClick={() => window.open('https://www.linkedin.com/in/sean-marcus-joesting/', '_blank')}>
                        <img src={linkedPic}/>
                    </div>
                </Tooltip>
                <div>
                </div>
            </div>
        </nav>
    
        </Fade>
        </div>

    )
}

const MenuIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="white">
        <   path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
    )
}
