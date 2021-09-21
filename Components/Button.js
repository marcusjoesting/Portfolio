import React from 'react'

export default function Button(props) {
    if (!props.alt)return (

            <button onClick={props.onClick} className="w-50 hover:text-white hover:bg-black z-10 font-sans tracking-wide text-lg transistion duration-500 uppercase transform font-2xl hover:-translate-y-2 px-4 py-2 text-black border-2 border-black rounded">
                {props.children}
            </button>
   
    )
    else return (
        <button onClick={props.onClick} className="w-50 bg-black hover:text-black hover:bg-transparent  z-10 font-sans tracking-wide text-lg transistion duration-500 uppercase transform font-2xl hover:-translate-y-2 px-4 py-2 text-white border-2 border-black rounded">
        {props.children}
    </button>

    )
}