import React from 'react'
import {SectionHeader, SectionSubheader, BackgroundTypography} from './Typography'
import Fade from 'react-reveal/Fade'


export default function Section(props) {
    return (
        <>
        <div className={"container mx-auto mb-10  flex flex-wrap justify-center items-center z-20 " + props.classNameOverride}>
            {props.header && <Fade left><div className="w-full z-10 bg-black px-4 shadow-xl flex md:flex-row py-5 md:py-2" >
         
            <SectionHeader>
                {props.header}
            </SectionHeader>
            <div className='text-md text-right text-white flex-auto flex align-middle items-center justify-end'>
                {props.subheader}
            </div>
                
         
            </div></Fade>}
            <Fade right>
                <div className="z-10 w-full overflow-hidden">
                {props.children}
                </div>
            </Fade>
        </div>
        </>
    )
}
export const Divider = () => {
    return (
        <div className="w-full bg-white h-1 mt-8 mb-4 z-10">
        </div>
        
    )
}