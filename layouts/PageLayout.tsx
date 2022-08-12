import { FC, ReactNode } from 'react'

type PageLayoutProps = {
    children: ReactNode
    flex?: "col" | "row"
    center?: "x" | "y" | "both" | "none"
    style?: string
    height?: "screen"
}

const PageLayout: FC<PageLayoutProps> = ({
    children,
    flex = "col",
    center = "none",
    style,
    height,
    ...Props
}) => {
    const centerValue =  center === "both" ? "items-center justify-center"
                        :center === "none" ? ""
                        :center === "x" ? "items-center"
                        :center === "y" ? "justify-center"
                        :""
  return (
<div {...Props}
className={`w-screen overflow-y-auto overflow-x-hidden transition text-black dark:text-white
            flex-${flex} ${centerValue} ${height?"h-[calc(100vh-5rem)]":""}
            dark:bg-black bg-white flex ${style}`}>
    {children}
</div>
)}

export default PageLayout