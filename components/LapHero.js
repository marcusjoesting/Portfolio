import React from 'react'
import Background from './Background'
import Button from './Button'
export default function LapHero(props) {
    return (
        <div className="py-36 flex text-black items-center flex-col overflow-hidden">
         
            <h1 className="text-5xl z-20">
                Sean Marcus Joesting
            </h1>
            {/* <h3 className="text-white">
                I build fullstack software applications
            </h3> */}
            <div className="p-6 rounded-xl mt-5 flex space-x-4">
            <Button>
                My Work
            </Button>
            <Button>
                Contact Me
            </Button>
            <Button>
                About Me
            </Button>
            </div>
        </div>
    )
}