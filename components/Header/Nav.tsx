import Link from 'next/link'
import { useRouter } from 'next/router'
import { ReactNode } from 'react'
import ProfileImg from './Profile'
import { signIn, useSession } from 'next-auth/react'

type NavProps = {
    isNavOpen: boolean
    setIsNavOpen: ((isNavOpen:boolean) => void)
}

const NavBar = ({isNavOpen, setIsNavOpen}: NavProps) => {
  const router = useRouter()
  const { status } = useSession()
  return (
<nav className='w-full flex justify-end'>
    <div onClick={() => setIsNavOpen(!isNavOpen)} className={`${isNavOpen?"":"hidden"} items-center justify-center flex-col flex md:hidden absolute top-0 h-screen left-0 w-screen dark:bg-[#333333A1] bg-[#000000A1]`}>
      <div className='flex flex-col'>
        <NavItemSM href='/'>Home</NavItemSM>
        <NavItemSM href='/Blog'>Blog</NavItemSM>
        <NavItemSM href='/Roadmap'>Roadmap</NavItemSM>
        <NavItemSM href='/About'>About</NavItemSM>
      </div>
      <div className="flex absolute bottom-28 items-center justify-center">
        <Link href="/Courses">
          <button className='h-12 rounded-md font-bold dark:text-black text-white transition dark:bg-white bg-black px-5 py-3'>Courses</button>
        </Link>
        <div onClick={() => {
          if (status == 'authenticated') {
            router.push('Profile')
          } else {
            signIn()
          }
        }}>
          <a><ProfileImg /></a>
        </div>
      </div>
    </div>
    <div className="md:flex hidden items-center h-full w-full justify-end mx-3">
      <NavItemLG href='/'>Home</NavItemLG>
      <NavItemLG href='/Blog'>Blog</NavItemLG>
      <NavItemLG href='/Roadmap'>Roadmap</NavItemLG>
      <NavItemLG href='/About'>About</NavItemLG>
      <div className='h-1 w-4'/>
      <Link href="/Courses">
        <button className='rounded-md font-bold text-white bg-purple-600 px-5 py-3 hover:text-black hover:outline outline-black outline-[1.5px] hover:bg-white dark:hover:text-white dark:outline-white dark:hover:bg-black transition'>Courses</button>
      </Link>
      <>
        <a onClick={() => {
          if (status == 'authenticated') {
            router.push('Profile')
          } else { signIn() }
      }} className='pr-12'><ProfileImg /></a>
      </>
    </div>
</nav>
)}

export default NavBar

type NavItemProps = {
  children: ReactNode
  href: string
}

const NavItemLG = (props:NavItemProps) => {
  return (
<Link href={props.href}>
  <a className='mx-3 hover:text-purple-600 dark:hover:text-purple-400 dark:text-white transition font-bold'>{props.children}</a>
</Link>
)}

const NavItemSM = (props:NavItemProps) => {
  const underline = useRouter().pathname==props.href?"underline":""
  return (
<Link href={props.href}>
  <a className={`${underline} font-bold text-white underline-offset-4 text-xl text-center my-2`}>{props.children}</a>
</Link>
)}