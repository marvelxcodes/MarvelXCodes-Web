import { ReactNode } from 'react'
import SideBar from '@components/Courses/SideBar'
import PageLayout from './PageLayout'

type CourseLayoutProps = {
    children: ReactNode
}

export default ({children}:CourseLayoutProps) => {
  return (
<PageLayout flex='row'>
  <SideBar />
  <div className='overflow-y-scroll flex flex-col w-9/12'> 
    {children}
  </div>
</PageLayout>
)}