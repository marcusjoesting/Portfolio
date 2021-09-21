import Head from 'next/head'
import Home from '../components/Home'
export default function Index() {
  return (
    <>
      <Head>
        <title>Sean Marcus - Software Engineer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home/>
      </>
  )
}
