import { useRouter } from "next/router"
import { useState } from "react"
import HTMLCourse from "@data/HTMLCourse"

export default function useChapter() {
    const { asPath } = useRouter()
    const Course = () => {
        if(asPath.includes("HTML")) {

        } else if (asPath.includes("CSS")) {
            return HTMLChapter
        }
    }
    const [Chapters, setChapters] = useState<object[]>()
    
}