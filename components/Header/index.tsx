import {  } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import NavToggle from './NavToggle'
import NavBar from './Nav'

type Props = {
    switchMode: (() => void) 
}

const Header = ({switchMode}: Props) => {
    const [isNavOpen, setIsNavOpen] = useState(false)
  return (
<header className='flex z-30 fixed top-0 w-screen left-0 items-center px-20 md:px-10 h-20 bg-white transition shadow-2xl dark:shadow-gray-700 dark:bg-black'>
    <NavToggle isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
    <h1 className='text-2xl dark:text-white font-bold'>MarvelXCodes</h1>
    <NavBar setIsNavOpen={setIsNavOpen} isNavOpen={isNavOpen} />
    <ModeToggle switchMode={switchMode} />
</header>
)}

export default Header

const ModeToggle = ({switchMode}:Props) => {
    return (
<button className='absolute right-10 h-12 w-12 flex dark:bg-gray-800 items-center justify-center rounded-lg bg-gray-200' onClick={switchMode}>
    <svg className="dark:hidden flex h-[25px] w-[25px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
    <svg className="text-white dark:flex hidden h-[25px] w-[25px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
    </svg>
</button>
)}