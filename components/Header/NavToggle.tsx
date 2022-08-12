type NavToggleProps = {
    isNavOpen: boolean
    setIsNavOpen: ((isNavOpen:boolean) => void)
}

export default ({isNavOpen, setIsNavOpen}:NavToggleProps) => {
    return (
<span onClick={() => setIsNavOpen(!isNavOpen)} className={`absolute left-10 ${isNavOpen?"text-white":"text-black"} dark:text-white md:hidden z-30 mr-3`}>
    <svg style={!isNavOpen?{}:{display:'none'}}  className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
    <svg style={isNavOpen?{}:{display:'none'}} className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
</span>
)}