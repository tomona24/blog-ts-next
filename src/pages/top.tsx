import type { NextPage, GetServerSideProps } from 'next'
import Head from 'next/head'
import { Button } from '../components/atoms/Button'

export const getServerSideProps :GetServerSideProps = async (context) => {
    return {
        props: {
            layout: 'main',
        }, // will be passed to the page component as props
    }
}

const Top: NextPage = () => {
return (
    <div>
        <Head>
            <title>StockRecipe</title>
            <meta name="description" content="Stock Recipe メンバーズページ" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <main >
        <Button text='GoSSAAAAAAAhan' onClick={()=>{console.log("Click!")}} />
        <h1 className="text-30xl text-blue-600">
            Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p >
            トップです
        </p>

        </main>

    </div>
    )
}

export default Top
