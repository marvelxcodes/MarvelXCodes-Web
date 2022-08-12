import type { NextPage, GetStaticProps } from 'next'
import prisma from '../../libs/prisma'

const Blogs:NextPage = ({blogs}:any) => {
  return (
    <div>
      <h1>Your Blogs</h1>
      <div className="">

      </div>
    </div>
)}

export default Blogs

export const getStaticProps: GetStaticProps = async () => {
  const blogs = prisma.blog.findFirst({
    take : 20
  })
  return {
    props: {
      blogs
    }
  }
}