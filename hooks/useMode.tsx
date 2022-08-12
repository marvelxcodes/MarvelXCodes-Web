import { useState, ReactNode } from "react"
export const useMode = () => {
    const [mode, setMode] = useState<string>('dark')
    const switchMode = () => setMode(mode==="light" ? "dark":"light")
    return { mode, switchMode }
}

type ModeProviderProps ={
    mode: string
    children: ReactNode
}

export const ModeProvider = ({mode, children}:ModeProviderProps) => {
    return (
<div className={`${mode}`}>
    {children}
</div>
)}