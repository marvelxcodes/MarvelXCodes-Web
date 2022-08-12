import { HTMLProps } from 'react'

type InputProps = HTMLProps<HTMLInputElement>

export default (Props:InputProps) => (
  <input {...Props} type="text" className='dark:text-white mb-5 px-5 py-3 bg-gray-200 dark:outline-white dark:bg-gray-800 w-full focus:outline rounded-sm transition border-none' />
)