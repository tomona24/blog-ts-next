import type { NextPage, GetStaticProps, GetStaticPaths } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { getAllPostIds, getPostData } from '../../lib/posts'

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getAllPostIds()
    return {
      paths,
      fallback: false
    }
  }
export const getStaticProps: GetStaticProps= async ({params} ) => {
    const postData = await getPostData(params.id as string);
    return {
      props: {
        postData
    }
  }
}

const Post = ({ postData }: {postData: {
  title: string
date: string
contentHtml: string
image: string
}}) => {
        return (
            <main>
                <Head>
                    <title>{postData.title}</title>
                </Head>
                <article>
        <h1 >{postData.title}</h1>
        <Image src={`/posts/${postData.image}`} />
        <div >
          {/* <Date dateString={postData.date} /> */}
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
                <br />

                <br />

            </main>
        )
}

export default Post