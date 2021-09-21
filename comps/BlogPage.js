import React from 'react'
import Footer from './Footer'
import Navigation from './Navigation'
import Card from './Card'
import Fade from 'react-reveal/Fade'
import Section from './Section'
import b8 from './images/blog8.png'
import best7 from './images/7best.png'
import java10 from './images/10javascript.png'
import react10 from './images/10react.png'
import selftaught from './images/selftaught.jpeg'
import tailwind from './images/tailwind.png'
import tailwindreact from './images/tailwindreact.png'
import next from './images/next.png'
import Background from './Background'



export default function(props) {
    const posts = [
        {
            image: b8,
            name: 'The Gift Of Code — React Apps As Gifts',
            description: 'Front-end Frameworks such as React make it easier than ever to build beautiful web applications. You can quickly create new...',
            url:'https://marcusjoesting.medium.com/the-gift-of-code-building-web-apps-as-fun-gifts-28306a3a6685'
        },
        {
            image: next,
            name: 'Next JS - Build for Production',
            description: 'Next.js makes it easy to build a full stack react application with server-side rendering, image optimization, advanced routing and more!',
            url:'https://marcusjoesting.medium.com/next-js-build-for-production-367f58cab8ea'
            },
        {image: tailwind,
        name: 'Tailwind CSS', description: 'Getting started with Tailwind CSS. Build user interfaces with efficiency and ease.',
         url:'https://marcusjoesting.medium.com/tailwind-css-2c126a8326b3?source=your_stories_page-------------------------------------'},
        {
        image: tailwindreact,
        name: 'Tailwind CSS + React.js',
        description: 'Tailwind CSS can often be a bit of a headache to set up, especially with frameworks such as React. However, there is an extremely simple…',
        url:'https://marcusjoesting.medium.com/the-fastest-way-to-get-started-with-tailwind-css-with-react-js-5bdeb62bbd35'
        },
        {
            image: selftaught,
            name: 'How To Get Started as a Self Taught Software Developer',
            description: 'So you’ve made the decision to become a software developer but you aren’t sure where to begin. With the overwhelming amount of bootcamps…',
            url:'https://marcusjoesting.medium.com/how-to-get-started-as-a-self-taught-software-developer-ae2fa6ba0977'
            },
        {
            image: selftaught,
            name: 'How to make global state management super simple in React with hooks',
            description: 'The useContext hook is the easiest way to manage global state in your React app. A global context paired with the useState hook allows you…',
            url:'https://marcusjoesting.medium.com/how-to-make-global-state-management-super-simple-in-react-with-hooks-b51ab55b040c'
        },
        {
            image: best7,
            name: 'The 7 Best Ways To Make Money As A Software Developer In 2021',
            url:'https://marcusjoesting.medium.com/the-7-best-ways-to-make-money-as-a-software-developer-in-2021-68711813074d'
        },
        {
            image: react10,
            name: '10 Awesome React Packages That Every React Developer Should Know',
            url:'https://marcusjoesting.medium.com/10-awesome-react-packages-that-every-react-developer-should-know-7d699e9acf3d'
        },
        {
            image: java10,
            name: '10 Awesome JavaScript Libraries That Every Developer Should Know About',
            url:'https://marcusjoesting.medium.com/10-awesome-javascript-libraries-that-every-developer-should-know-about-115d139bcdf0'
        },
  
        
        
        
        

    ]
    return(
        <>
        <Background/>
        <div className="bg-gradient-to-r from-blue-500 to-red-500">
            <Navigation relative/>
            <Section header="My Blog Posts" subheader="My software development blog posts">
            <div className="w-full flex justify-center mb-20 flex-wrap items-stretch">
                {posts.map((post,i) => {
                    return (
                        <div key={i} className="w-full md:w-1/3 h-full p-1">
                            <Fade right right>
                                <Card {...post} blog/>
                            </Fade>
                        </div>
                    )
                })}
            </div>
            </Section>
            <Footer/>
        </div>
        </>
    )
}