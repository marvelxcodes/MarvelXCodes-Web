import { FC, ReactNode } from 'react'
import { SearchIcon } from '@heroicons/react/solid'
import { useState, useEffect  } from 'react'
import Link from 'next/link'

const SideBar:FC = () => {

  const [searchInput, setSearchInput] = useState<string>('')

  useEffect(() => {
    
  }, [searchInput])

  return (
<div className="h-max w-3/12 bg-gradient-to-r from-gray-300 text-sm dark:from-gray-800 to-transparent overflow-x-hidden overflow-y-scroll flex flex-col p-3">
    <div className="flex h-10 items-center m-6 text-gray-400 hover:opacity-80 outline outline-1 dark:outline-gray-500 mb-3 focus:opacity-80 transition dark:shadow-gray-600 font-semibold bg-white dark:bg-gray-700 shadow-lg rounded-lg">
      <SearchIcon className='h-5 mx-3' />
      <input onChange={ E => setSearchInput(E.target.value)} placeholder='Search Chapter...' type="text" className='w-full outline-none bg-[#00000000] border-none' />
    </div>
    <div className="flex flex-col w-0">
      
    </div>
  </div>
)}

export default SideBar

type ChapterProps = {
  children: ReactNode
}

type LessonProps = {
  children: ReactNode
  href: string
}

const Chapter = ({children}: ChapterProps) => {
  
  return (
  <div className="w-full">
    <h1 className=''>{children}</h1>

  </div>
)}

const Lesson = ({children, href}: LessonProps) => (
  <Link href={href}>
    <h3>{children}</h3>
  </Link>
)