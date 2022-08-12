import { ReactNode } from "react"

type CommentProps = {
    profileImg: string
    username: string
    body: string
}

export const Comment = (props: CommentProps) => {
  return (
<div>Comment</div>
)}

type CommentsLayoutProps = {
    children: ReactNode
}

export const CommentsLayout = ({children}:CommentsLayoutProps) => {
    return (
<div className="">
    {children}
</div>
)}