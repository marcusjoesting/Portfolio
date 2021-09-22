import {useState,useEffect} from 'react'
import React from 'react'
import ProjectPage from '../components/ProjectsPage'
import Head from 'next/head'
import LoadingPage from '../components/LoadingPage'

export default function(props) {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        },2500)
    },[])

    return (
        <>
        <Head>
          <title>Sean Marcus - My Projects</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        {loading && <LoadingPage/>}
        <div>
            <ProjectPage/>
        </div>
        </>
    )
}