import type { GetStaticProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { getSortedPostsData } from '../lib/posts'
import { Button } from '../components/atoms/Button'
import Page from '../components/atoms/Page'
import Icon from '../components/atoms/Icon'
import Card from '../components/atoms/Card'


export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    }, // will be passed to the page component as props
  }
}

const Home = ({
  allPostsData
}: {
  allPostsData: {
    date: string
    title: string
    id: string
  }[]
}) => {
  return (
    <Page>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main >
        <Button text='GoSSAAAAAAAhan' onClick={() => { console.log("Click!") }} />
        <div className='flex flex-row  flex-wrap'>
        </div>
        <Icon />
        <Link href={'/top'}>
          <a>Top</a>
        </Link>
        <ul>
        {allPostsData.map(({ id, date, title }) => (
            <li  key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small>
                {/* <Date dateString={date} /> */}
              </small>
            </li>
          ))}
        </ul>
      </main>

    </Page>
  )
}

export default Home
