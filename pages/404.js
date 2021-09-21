import Button from "../components/Button";
import Head from 'next/head'
export default function Custom404() {
    return (
        <>
        <Head>
          <title>Sean Marcus - 404 PAGE NOT FOUND</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
    <div className="fixed top-0 left-0 h-screen w-screen flex justify-center items-center flex-col space-y-10 bg-gradient-to-r from-blue-500 to-green-500">
        <div className="text-6xl text-center">
            404
        </div>
        <div className="text-center">
            Oh no! The page you're looking for doesn't exist. Sorry :P
        </div>
        <div>
            <Button onClick={() => window.location.href = '/'}>Go back home</Button>
        </div>

    </div>
    </>
    )
}