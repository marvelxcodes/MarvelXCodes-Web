import Image from 'next/image'
import {useSession} from 'next-auth/react'

export default () => {
    const { data } = useSession()
    const img = data?.user?.image
return (
<div className="aspect-square flex items-end justify-center rounded outline outline-gray-400 dark:outline-gray-600 outline-[2px] h-12 ml-3">
    {img? <Image className='rounded' height={50} width={50} src={img} />:
        <Image height={40} width={40} src="/defaultUserImg.png" alt="User" />}
</div>
)}