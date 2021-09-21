import React from 'react'
import Loader from 'react-spinners/ClipLoader'

export default function LoadingPage(props) {
    return(
        <div className='w-screen h-screen fixed top-0 text-black bg-white z-50 left-0 flex justify-center items-center flex-col'> 
           <div className="w-48 py-4 text-center flex justify-center">
            <Loader size={100}/>
            </div>
            <div className="text-4xl md:text-6xl p-4 text-bold font-custom text-center">
                Sean Marcus Joesting
            </div>
          
          
          
        

        </div>
    )
}