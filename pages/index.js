import {useState,useEffect} from 'react'
import Head from 'next/head'
import Home from '../components/Home'
import LoadingPage from '../components/LoadingPage'
export default function Index() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
      setTimeout(() => {
          setLoading(false)
      },2500)
  },[])

  return (
    <>
    {loading && <LoadingPage/>}
      <Head>
        <title>Sean Marcus - Software Engineer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-screen overflow-hidden top-0 left-0">
      <Home/>
      </div>
      </>
  )
}
