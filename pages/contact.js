import {useState,useEffect} from 'react'
import ContactPage from '../components/ContactPage'
import Head from 'next/head'
import LoadingPage from '../components/LoadingPage'
export default function() {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        },2500)
    },[])

    return(
    <>
      <Head>
        <title>Sean Marcus - Contact Me</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* {loading && <LoadingPage/>} */}
    <ContactPage/>
    </>
)}