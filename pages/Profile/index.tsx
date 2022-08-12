import type { NextPage } from 'next'
import { useSession, signIn, signOut } from "next-auth/react"
import Link from 'next/link'

const MyProfile:NextPage = () => {
  const { data, status } = useSession()
  return (
<div className='dark:text-white'>
  {data?.user?.email}
  <button onClick={() => signIn()} className='h-12 mx-3 font-bold text-white w-24 bg-black dark:text-black transition dark:bg-white rounded'>Sign In</button>
  <button onClick={() => signOut()} className='h-12 mx-3 font-bold text-white w-24 bg-black dark:text-black transition dark:bg-white rounded'>Sign Out</button>
</div>
)}

export default MyProfile