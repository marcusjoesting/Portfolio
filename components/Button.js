import React from 'react'

export default function Button(props) {
    if (!props.alt)return (

            <button onClick={props.onClick} className="bg-white hover:text-white hover:bg-black z-10 font-sans tracking-wide text-lg transistion duration-500 uppercase transform font-2xl hover:-translate-y-2 px-4 py-2 text-black rounded">
                {props.children}
            </button>
   
    )
    else return (
        <button onClick={props.onClick} className="border-b-2 border-l-1 border-l-white border-b-white bg-black hover:text-black hover:bg-transparent  z-10 font-sans tracking-wide text-lg transistion duration-500 uppercase transform font-2xl hover:-translate-y-2 px-4 py-2 text-white border-2 border-black rounded">
        {props.children}
    </button>

    )
}