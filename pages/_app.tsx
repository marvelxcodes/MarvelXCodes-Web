import type { AppProps } from 'next/app'
import { useMode } from '@hooks/useMode'
import Header from '@components/Header'
import '@libs/Tailwind.css'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import CourseLayout from '@layouts/CourseLayout'
import Courses from '@data/Courses'
import Providers from '@layouts/Providers'

export default function MyApp({ Component, pageProps }: AppProps) {
  const { asPath } = useRouter()
  useEffect(() => {
    
  } ,[])
  const { mode, switchMode } = useMode()
  return (
<Providers mode={mode}>
  <div className='min-h-screen w-screen selection:bg-purple-600 selection:text-white transition pt-20 flex-col md:flex-row flex dark:bg-black'>
    <Header switchMode={switchMode} />
    {
      Courses.find((course) => (
        asPath.includes(String(course.href))
      ))?
      <CourseLayout>
        <Component {...pageProps} />
      </CourseLayout> :
      <Component {...pageProps} />
    }
  </div>
</Providers>
)}