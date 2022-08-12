import { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export type CourseProps = {
    name: string
    description: string
    thumbnail: string,
    href: string
    tags: string[]
}

export const Course:FC<CourseProps> = ({name, description, thumbnail, href}) => {
  return (
<div className='h-80 relative w-64 m-5 rounded-lg transition hover:-translate-x-2 hover:-translate-y-2 shadow-gray-800
              dark:bg-gray-900 bg-gray-50 shadow hover:shadow-2xl
              outline outline-purple-600 outline-1 dark:hover:shadow-gray-800'>
    <img className="w-full rounded-t-lg aspect-video shadow-2xl" src={"/textthumbnail.jpg"} />
    <h1 className='text-xl text-center font-bold p-3'>{name}</h1>
    <h3 className='px-3 text-center'>{description}</h3>
    <Link href={`/Courses/${href}`}>
      <button className='w-[calc(100%-1.5rem)] active:bg-purple-900 select-none absolute font-bold transition bottom-0 hover:opacity-90 rounded-md h-11 bg-purple-600 text-white m-3'>Enroll Now</button>
    </Link>
</div>
)}