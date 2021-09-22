/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import Tooltip from './Tooltip'
import githubPic from './images/github.png'
import linkedPic from './images/linkedin (1).png'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Link from 'next/link'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Projects', href: '/projects' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact Me', href: '/contact'  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navigation() {
    const router = useRouter()
    console.log(router)
  return (
    <Disclosure as="nav" className="bg-black z-50 border-b-2 border-white relative w-screen container mx-auto">
      {({ open }) => (
        <>
          <div className="">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                      >
                        <a className={classNames(
                          router.pathname === item.href ? 'bg-white text-white shadow-xl bg-opacity-10 shadow-white ' : 'transform transistion duration-500 hover:-translate-y-1 text-gray-300 bg-opacity-30 hover:text-white',
                          'px-2 py-2 rounded-md text-md font-medium'
                        )}
                        aria-current={router.pathname === item.href ? 'page' : undefined}>
                        {item.name}
                        </a>
                        
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-4">
             
              <div className="hidden md:flex items-center content-center justify-center font-sans bg-black p-4 rounded">
                 <Tooltip placement='bottom' title="Github Profile">
                     <div className="w-8 h-8 transistion duration-500 ml-4 hover:text-white transform hover:-translate-y-1 cursor-pointer" onClick={() => window.open('https://github.com/marcusjoesting','_blank')}>
                         <Image src={githubPic}/>
                     </div>
                 </Tooltip>
                 <Tooltip placement='bottom' title="LinkedIn Profile">
                     <div className="w-8 h-8 transistion duration-500 ml-4 hover:text-white transform hover:-translate-y-1 cursor-pointer" onClick={() => window.open('https://www.linkedin.com/in/sean-marcus-joesting/', '_blank')}>
                         <Image src={linkedPic}/>
                     </div>
                   </Tooltip>


              </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}


// import React from 'react'
// import githubPic from './images/github.png'
// import linkedPic from './images/linkedin (1).png'
// import Fade from 'react-reveal/Fade'
// import Image from 'next/image'

// import Tooltip from './Tooltip'


// export default function Navigation(props) {
//     const [mobileNav, setMobile] = React.useState(false)

//     const links = [
//         {name: 'Home', url: '/'},
//         {name: 'Contact Me', url: '/contact'},
//         {name: 'Projects', url: '/projects'},
//         {name: 'Blog', url: '/blog'},

//     ]
//     return (
//         <div className={props.relative ? "flex":"absolute w-screen top-0 flex"}>
//         <Fade top>
//         <nav className={'flex overflow-hidden w-full bg-black border-b-2 border-white z-20 container mx-auto justify-between items-center content-center h-20 top-0'}>
                
        
//             <div className="flex md:hidden cursor-pointe ml-8" onClick={() => setMobile(true)}>
//                 <MenuIcon/>
//             </div>
  
//             <div className="absolute w-screen z-50 top-0 left-0">
//             {mobileNav &&
           
//             <div className="w-full z-50 bg-white flex justify-center flex-col items-center">
//                 {links.map(link => {
//                     return (
//                         <div key={JSON.stringify(link)} onClick={() => window.location.href = link.url} className="w-full font-custom text-center border-b-2 border-black py-4 transistion duration-500 hover:bg-black hover:text-white cursor-pointer">
//                             {link.name}
//                         </div>    
//                     )
//                 })}
//             </div>
//             }
        
//             </div>
          
//             <div className='hidden md:flex align-middle items-center h-full'>
//                 {links.map((link,i) => {
//                     return (
//                         <a href={link.url} className="text-white text-2x transistion duration-500 mx-4 transform hover:-translate-y-1">
//                             {link.name}
//                         </a>
//                     )
//                 })}
//             </div>
//             <div className="hidden md:flex items-center content-center justify-center font-sans bg-black p-4  rounded">
//                 <Tooltip placement='bottom' title="Github Profile">
//                     <div className="w-8 h-8 transistion duration-500 ml-4 hover:text-white transform hover:-translate-y-1 cursor-pointer" onClick={() => window.open('https://github.com/marcusjoesting','_blank')}>
//                         <Image src={githubPic}/>
//                     </div>
//                 </Tooltip>
//                 <Tooltip placement='bottom' title="LinkedIn Profile">
//                     <div className="w-8 h-8 transistion duration-500 ml-4 hover:text-white transform hover:-translate-y-1 cursor-pointer" onClick={() => window.open('https://www.linkedin.com/in/sean-marcus-joesting/', '_blank')}>
//                         <Image src={linkedPic}/>
//                     </div>
//                 </Tooltip>
//                 <div>
//                 </div>
//             </div>
//         </nav>
    
//         </Fade>
//         </div>

//     )
// }

// const MenuIcon = () => {
//     return (
//         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="white">
//         <   path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//         </svg>
//     )
// }
