import { NextPage } from 'next'
import { LessonBreak } from '@components/Elements/Break'
import { ChapterHeading, LessonHeading } from '@components/Elements/Heading'
import { LessonBody } from '@components/Elements/LessonBody'

const HTMLCourse:NextPage = () => {
  return (
<>
  <ChapterHeading>Introduction</ChapterHeading>

  <LessonHeading>What is HTML?</LessonHeading>
  <LessonBody>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro deleniti quis ducimus iusto necessitatibus, recusandae earum laboriosam debitis libero voluptatem facere neque officiis saepe voluptate. Possimus, quasi voluptatum recusandae blanditiis nobis eaque repellat. Aspernatur reprehenderit dolorum nam distinctio, quo ducimus!
  
  </LessonBody>
</>
)}

export default HTMLCourse