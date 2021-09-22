import React from 'react'
import githubPic from './images/github.png'
import linkedPic from './images/linkedin (1).png'
import youtube from './images/youtube.png'
import Image from 'next/image'
import Tooltip from './Tooltip'
import Link from 'next/link'

export default function Footer(props) {
    const links = [
        {name: 'Home', url: '/'},
        {name: 'Contact Me', url: '/contact'},
        {name: 'Projects', url: '/projects'},
        {name: 'Blog', url: '/blog'},

    ]
    const socialLinks = [
        {icon: githubPic, url:'https://github.com/marcusjoesting', name: 'Github Profile'},
        {icon: linkedPic, url:'https://www.linkedin.com/in/sean-marcus-joesting/', name: 'LinkedIn Profile'},
        {icon: youtube, url:'/', name: 'Youtube Profile'},
    ]


    return(
        <div className="w-screen text-white flex flex-col justify-center align-middle items-center mt-20 z-12">
            <div className="flex flex-wrap mt-4 mb-4 justify-center z-12">
                {links.map((link,i) => {
                    return (
                        <Link href={link.url} key={link.url}>
                        <div className="ml-4 mr-4 z-10 transistion duration-500 transform hover:-translate-y-1 cursor-pointer">
                            {link.name}
                        </div>
                        </Link>
                    )
                })}
            </div>
            <div className="flex flex-wrap justify-center z-12 mb-4">
                {socialLinks.map((link,i) => {
                    return (
                        <Tooltip key={i} placement='top' title={link.name}>
                        <div onClick={() => window.open(link.url,'_blank')} className="shadow-xl w-16 h-16 rounded-full p-4 mx-2 bg-opacity-10 hover:bg-opacity-50 bg-white z-10 cursor-pointer transistion duration-500 transform hover:-translate-y-1">
                            
                                <Image src={link.icon} height={32} width={32} />
                           
                        </div>
                        </Tooltip>
                    )
                })}
            </div>
    
            <div className="text-xs p-2 z-10">
                Copyright &copy; 2021 Sean Marcus Joesting
            </div>
        </div>
    )
}