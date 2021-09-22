import React from 'react'

export default function LoadingScreen(props) {
    return (
        <div className="w-screen h-screen fixed top-0 left-0 flex justify-center items-center space-y-5 flex-col">
            <div>
                Loading the data in the metaverse...
            </div>
        </div>
    )
}