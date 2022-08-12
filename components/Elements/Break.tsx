import { FC } from 'react'

export const LessonBreak:FC = () => {
  return (
    <div className="py-5 flex w-full justify-center h-10">
        <hr className='m-5 dark:bg-gray-800 dark:opacity-60 bg-black w-[95%] h-[1px]' />
    </div>
)}

export const ParaBreak:FC = () => {
  return <br className='' />
}