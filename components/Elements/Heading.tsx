import { ReactNode } from "react"
import { HashtagIcon } from '@heroicons/react/outline'


type Props = {
    children: string
}

export const ChapterHeading = ({children}:Props) => {
    return <h1 className='text-5xl mt-10 ml-5 font-extrabold'>{children}</h1>
}

export const LessonHeading = ({children}:Props) => {
    return (
<div className="flex ml-8 mt-4 items-center">
    <h1 className='text-2xl font-bold' id={children.replaceAll(" ", "")}>{children}</h1>
    <a href={`#${children.replaceAll(" ", "")}`}>
        <HashtagIcon className="h-6 transition-opacity hover:opacity-70 text-purple-600 w-6" />
    </a>
</div>
) }