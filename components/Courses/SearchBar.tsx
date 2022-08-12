import { FC, SetStateAction } from 'react'
import { SearchIcon } from '@heroicons/react/solid'

type SearchBarProps = {
  searchText: string
  setSearchText: (prev:string) => void
}

const SearchBar = ({searchText ,setSearchText}:SearchBarProps) => {
  return (
<div className='h-32 w-full flex items-center justify-center'>
    <div className="md:w-1/2 h-12 flex outline-1 outline transition font-bold text-gray-400 bg-gray-300 shadow-lg border-none rounded-lg dark:bg-gray-600 text-center w-9/12 pr-10">
      <SearchIcon className='aspect-square p-3' />
      <input value={searchText} onChange={e => setSearchText(e.target.value.toLowerCase())} type="text" placeholder='Search Courses...' className="h-full w-full outline-none bg-[#00000000] transition font-bold border-none rounded-lg text-center" />
    </div>
</div>
)}

export default SearchBar