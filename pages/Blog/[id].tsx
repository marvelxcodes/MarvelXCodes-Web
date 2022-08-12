import type { NextPage,
  GetStaticProps,
  GetStaticPropsContext,
  GetStaticPaths,
  GetStaticPathsContext,
  NextPageContext
} from 'next'
import { SideLayout , MainLayout } from '../../components/Blog/Layouts'
import prisma from '../../libs/prisma'

type BlogProps = {
  props: object
  comments: object[]
}

const Blog = ({props, comments}:BlogProps) => {
  return (
<div className='flex w-screen'>
  <MainLayout>
    
  </MainLayout>
  <hr className='h-[100%] w-[1px] pt-16 bg-gray-500' />
  <SideLayout>
    <h1 className='p-5 dark:text-white font-extrabold text-lg'>Comments {`( ${comments.length} )`}</h1>
    
  </SideLayout>
</div>
)}

export default Blog

export const getStaticProps:GetStaticProps = async (context:GetStaticPropsContext) => {
  const props = {
    id: context.params
  }
  return {
    props: {
      props,
      comments: [1, 2]
    },
    revalidate: 10000
  }
}

export const getStaticPaths:GetStaticPaths = async (context:GetStaticPathsContext) => {
  const fallback = true
  const res = await prisma.blog.findMany()
  const paths = res.map(blog => ({
    params: {
      id: blog.id
    }
  }))
  return { paths, fallback }
}