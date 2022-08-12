import type { NextPage } from 'next'
import Input from '../../components/Elements/Input'
import { useRef } from 'react'

const NewBlog: NextPage = () => {
  const titleRef = useRef<any>()
  const descriptionRef = useRef<any>()
  const bodyRef = useRef<any>()

  return (
<div className='md:w-[100%] h-[calc(100vh-5rem)] flex flex-col md:flex-row'>
  <div className="flex p-6 md:pb-6 pb-0 flex-col md:w-[40%]">
    <Input ref={titleRef} placeholder='Title' />
    <Input ref={descriptionRef} placeholder='Description' />
    <button className='w-full h-12 rounded dark:text-white outline outline-1 text-black font-bold text-xl bg-gray-300 dark:bg-gray-800'>Post</button>
  </div>
  <hr className='md:h-[calc(100vh-8rem)] w-[1px] my-6 bg-gray-500' />
  <div className="flex p-6 md:pt-6 pt-0 flex-col h-full md:w-[60%]">
    <textarea ref={bodyRef} placeholder='Content here...' className='dark:text-white h-full p-5 bg-gray-200 dark:outline-white dark:bg-gray-800 w-full resize-none focus:outline rounded-sm transition border-none'/>
  </div>
</div>
)}

export default NewBlog
