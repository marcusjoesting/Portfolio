import React from 'react'
import githubPic from './images/github.png'
import linkedPic from './images/linkedin (1).png'
import youtube from './images/youtube.png'
import Image from 'next/image'
import Tooltip from './Tooltip'


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
            {/* <div className="text-2xl p-4 text-center z-10">
                Sean Marcus Joesting
            </div> */}
            <div className="hidden sm:flex flex-wrap mt-4 mb-4 justify-center z-12">
                {links.map((link,i) => {
                    return (
                        <div className="ml-4 mr-4 z-10 transistion duration-500 transform hover:-translate-y-1 cursor-pointer" onClick={() => window.location.href = link.url}>
                            {link.name}
                        </div>
                    )
                })}
            </div>
            <div className="flex flex-wrap justify-center z-12 mb-4">
                {socialLinks.map((link,i) => {
                    return (
                        <div onClick={() => window.open(link.url,'_blank')} className="shadow-xl w-16 h-16 rounded-full p-4 mx-2 bg-opacity-10 hover:bg-opacity-50 bg-white z-10 cursor-pointer transistion duration-500 transform hover:-translate-y-1">
                            <Tooltip title={link.name} placement='top'>
                                <Image src={link.icon} height={32} width={32} />
                            </Tooltip>
                        </div>
                    )
                })}
            </div>
    
            <div className="text-xs p-2 z-10">
                Copyright &copy; 2021 Sean Marcus Joesting
            </div>
        </div>
    )
}