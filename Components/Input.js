import React from 'react'

export default function Input(props) {
    return(
        <>
            <label htmlFor={props.name} className="block text-sm font-medium text-black">
            {props.name}
        </label>
        <input
            type="text"
            name={props.name}
            id={props.name}
            autoComplete={props.name}
            onChange={e => props.onChange(e.target.value)}
            className="mt-1 p-4 focus:ring-white focus:border-white block w-full shadow sm:text-sm border-gray-300 rounded-md"

        />
      </>
    )
}