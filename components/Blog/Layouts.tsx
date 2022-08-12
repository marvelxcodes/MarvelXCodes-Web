import { ReactNode } from 'react'
import { AppContext, useContext } from '../../utils/AppContext'

type MainLayoutProps = {
  children: ReactNode
}

type SideLayoutProps = {
  children: ReactNode
}



export const SideLayout = (props: SideLayoutProps) => {
  const { user } = useContext(AppContext)
  return (
<div className='w-[30%]'>
    {props.children}
</div>
)}

export const MainLayout = (props: MainLayoutProps) => {
  return (
<div className='w-[70%] px-8'>
  {props.children}
</div>
)}