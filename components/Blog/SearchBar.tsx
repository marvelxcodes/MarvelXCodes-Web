import { FC } from 'react'
import { SearchIcon } from '@heroicons/react/solid'

const SearchBar:FC = ({setSearchText}:any) => {
  return (
<div className='h-32 w-full flex items-center justify-center'>
    <div className="md:w-1/2 h-12 flex outline-1 outline transition font-bold text-gray-400 bg-gray-300 shadow-lg border-none rounded-lg dark:bg-gray-600 text-center w-9/12 pr-10">
      <SearchIcon className='aspect-square p-3' />
      <input type="text" placeholder='Search Courses...' className="h-full w-full outline-none bg-[#00000000] transition font-bold border-none rounded-lg text-center" />
    </div>
</div>
)}

export default SearchBar