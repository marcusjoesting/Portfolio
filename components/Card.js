import React from 'react'
import Tooltip from './Tooltip'
import Button from './Button'
import Image from 'next/image'


export default function Card(props) {
    return (
        <div className={"flex flex-col max-h-full min-h-120 bg-white bg-opacity-50 shadow-lg  overflow-hidden"}>
        <div className="flex-none w-full relative h-64 overflow-hidden shadow bg-white">
            <Image src={props.image} alt={props.name} layout="fill" />
        </div>
        <form className="flex-auto">
            <div className="flex flex-col overflow-hidden align-middle h-42 p-6 space-y-2 pt-4">
            <h1 className="text-xl font-semibold text-black">
                {props.name}
            </h1>
           {!props.blog && <div className="w-full text-lg text-black flex flex-wrap space-x-0 md:space-x-0 h-10 items-start">
               {props.react && <Badge background='bg-blue-700'>React.js</Badge>}
               {props.firebase && <Badge background='bg-red-700'>Firebase</Badge>}
               {props.html && <Badge background='bg-pink-700'>HTML</Badge>}
               {props.css && <Badge background='bg-green-700'>CSS</Badge>}
               {props.javascript && <Badge background='bg-blue-500'>JavaScript</Badge>}
               {props.webflow && <Badge background='bg-gray-700'>Webflow</Badge>}
           </div>}
            <p className="text-gray-800 h-12 flex-auto overflow-hidden truncate-w-2">
            {props.description}
            </p>
                
            <div className="py-4 flex-1">
                <Button onClick={() => console.log()}>Check It Out</Button>
               
            </div>
            </div>

        </form>
        </div>
    )
}
export function JobCard(props) {
    return (
        <div className="flex bg-white bg-opacity-30 md:flex-row justify-center flex-col rounded-xl  text-black">
        <Tooltip title={props.description}>
            <div className="flex w-full p-5 justify-center items-center overflow-hidden align-middle  rounded-full h-48 md:w-1/2">
                {props.image && <img src={props.image} alt="" className="object-contain w-96" />}
                {props.text && <h1 className="text-2xl">{props.text}</h1>}
            </div>
        </Tooltip>
        <form className="flex-auto p-6">
            <div className="flex flex-wrap flex-col">
            <h1 className="text-2xl font-semibold font-custom text-black">
                {props.name}
            </h1>
            <p className="text-sm text-black flex-1">
            {props.role}
            </p>
            <p className="text-sm text-white text-opacity-90 flex">
            {props.dates}
            </p>
            </div>
    
            <div className="flex-auto flex space-x-3 py-6">
                <Button alt>Check It Out</Button>
               
            </div>
        </form>
        </div>
    )
}


export function Badge(props) {
    let name = "text-white p-1 text-xs rounded-full w-20 flex justify-center " + props.background
    return (
        <div className={name}>
            {props.children}
        </div>
    )
}

export function IconButton(props) {
    return (<Tooltip title={props.name}>
            <img src={props.src} classNameName="w-8 m-2 h-8 mt-6 transform transistion duration-500 hover:-translate-y-2 hover:bg-blue-700 cursor-pointer"/>
            </Tooltip>
        )
}


