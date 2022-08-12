import { ReactNode } from "react"

type LessonBody = {
    children: ReactNode
}

export const LessonBody = ({children}:LessonBody) => (
<div className="w-full font-medium md:px-14 mt-3">
    {children}
</div>
)