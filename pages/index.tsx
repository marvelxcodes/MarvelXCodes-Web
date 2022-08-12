import type { NextPage } from 'next'
import PageLayout from '@layouts/PageLayout'

const Home: NextPage = () => {
  return (
<div className='flex flex-col'>
<PageLayout height='screen' center='both'>
  <h1 className='dark:text-white select-none font-extrabold text-5xl md:text-8xl text-center max-w-4xl px-5'>MarvelXCodes</h1>
  <h1 className='text-white bg-purple-600 rounded font-bold text-lg md:text-xl py-1 text-center max-w-4xl px-5'>The Better Way To start your Coding Career</h1>
    <div className="flex mt-8">
      <button className='bg-purple-600 hover:opacity-80 transition py-3 mr-3 rounded-lg font-bold text-white px-5'>Get Started</button>
      <a href="https://github.com/marvelxcodes">
        <button className='dark:bg-gray-800 hover:opacity-80 transition bg-gray-300 ml-3 py-3 rounded-lg font-bold text-gray-600 dark:text-gray-300 px-5'>Whoami</button>
      </a>
    </div>
</PageLayout>
<PageLayout>

</PageLayout>
</div>
)}

export default Home