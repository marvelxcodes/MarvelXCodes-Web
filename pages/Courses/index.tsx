import { NextPage } from 'next'
import { Course, CourseProps } from '@components/Courses/Course'
import SearchBar from '@components/Courses/SearchBar'
import PageLayout from '@layouts/PageLayout'
import courses from '@data/Courses'
import { useEffect, useState } from 'react'

const Courses:NextPage = () => {
    const [CoursesList, setCoursesList] = useState<CourseProps[]>()
    const [searchText, setSearchText] = useState<string>('')
    useEffect(() => {
        let data = courses.filter(course => (
            course.tags.includes(searchText)
        ))
        setCoursesList(data)
    }, [searchText])
  return (
<>
<PageLayout height='screen' style=''>
    <SearchBar searchText={searchText} setSearchText={setSearchText} />
    <div className='w-full overflow-y-scroll justify-center h-full flex flex-wrap'>
        {CoursesList?.length==0?<h1>Not found</h1>
        : CoursesList?.map((course:CourseProps) => (
            <Course {...course} />
        ))}
    </div>
</PageLayout>
</>
)}

export default Courses