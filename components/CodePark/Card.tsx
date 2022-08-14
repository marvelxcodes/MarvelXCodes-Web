import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import type { FC } from 'react'

type CardProps = {
    name: string
    href: string
    description1: string
    description2: string
    image: StaticImageData
}

const Card:FC<CardProps> = ({ image, name, description1, description2, href }) => {
    return(
<div className='h-72 relative w-64 m-5 rounded-lg transition hover:-translate-x-2 hover:-translate-y-2 shadow-gray-800
              dark:bg-gray-900 bg-gray-50 shadow hover:shadow-2xl
              outline outline-purple-600 outline-1 dark:hover:shadow-gray-800'>
    <Image className="w-full rounded-t-lg aspect-video bg-purple-600 shadow-2xl" src={image} />
    <h1 className='text-xl text-center font-bold text-purple-600 px-3 mb-2'>{name}</h1>
    <h3 className='px-5 text-center dark:text-gray-400 font-semibold text-sm text-gray-500'>{description1}</h3>
    <h3 className='px-5 text-center font-semibold text-xs text-white'>{description2}</h3>
    <Link href={`/CodePark/${href}`}>
      <button className='w-[calc(100%-1.5rem)] active:bg-purple-900 select-none absolute font-bold transition bottom-0 hover:opacity-90 rounded-md h-11 bg-purple-600 text-white m-3'>Create CodePark</button>
    </Link>
</div>
)}

export default Card