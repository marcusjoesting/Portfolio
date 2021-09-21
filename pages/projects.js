import React from 'react'
import ProjectPage from '../components/ProjectsPage'
import Head from 'next/head'
export default function(props) {
    return (
        <>
        <Head>
          <title>Sean Marcus - My Projects</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div>
            <ProjectPage/>
        </div>
        </>
    )
}