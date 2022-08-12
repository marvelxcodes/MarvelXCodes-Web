type ToggleProps = {
    isHTML: boolean
    setIsHTML: ((isHTML: boolean) => void)
}

export default ({ isHTML, setIsHTML }:ToggleProps) => (
<div onClick={() => setIsHTML(!isHTML)} className="cursor-pointer w-14 rounded-3xl relative flex items-center p-2 h-8 bg-gray-200 dark:bg-gray-800">
    <div className={`${isHTML?"translate-x-5":"translate-x-0"} transition absolute rounded-full h-5 aspect-square bg-gray-800 dark:bg-white`}></div>
</div>
)