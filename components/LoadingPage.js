import React from 'react'
import Loader from 'react-spinners/ClipLoader'
import Background from './Background'
export default function LoadingPage(props) {
    const funFacts = React.useMemo(() => {
        return [
            "I love soccer. I've played since I was a young child",
            "I have many useless talents. I can juggle, solve a rubik's cube, spin a book on my finger and many other things that'll never come of use.",
            "I'm interested in Machine Learning",
            "I've always loved math.",
            "I'm Bilingual. I speak English and Portuguese.",
            "I enjoy playing chess in my free time.",
            "I'm a dual citizen. I have citizenship in Brazil and the United States.",
            "Cryptocurrency."
        ]
    },[])

    const randomIndex = React.useMemo(() => Math.floor(Math.random()*funFacts.length),[])

    return(
        <>
        <Background/>
        <div className='w-screen h-screen px-10 md:px-20 fixed top-0 text-black bg-gradient-to-r from-green-500 to-blue-500 z-50 left-0 flex justify-center items-center flex-col'> 
           <div className="w-48 py-4 text-center flex justify-center">
            <Loader size={100}/>
            </div>
            <div className="text-6xl my-5">
                Loading...
            </div>
            <div className="text-xs">
                Fun Fact: {funFacts[randomIndex]}
            </div>
        </div>
        </>
    )
}