import React from 'react'


export function SectionHeader(props) {
    return (
        <div className="text-2xl text-white">
            {props.children}
        </div>
    )
}
export function SectionSubheader(props) {
    return (
        <div className="text-lg text-white">
            {props.children}
        </div>
    )
}

export function BackgroundTypography(props) {
    return (
        <div className="absolute left-0 text-7xl z-1 text-black w-screen text-center opacity-50 items-center">
            {props.children}
        </div>
    )
}