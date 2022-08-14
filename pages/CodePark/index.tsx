import Card from '@components/CodePark/Card'
import ReactImg from '@assets/React.png'
import type {NextPage} from 'next'

const CodePark : NextPage = () => {
    return(
<div>
    <Card
        name='React JS'
        href='ReactJS'
        image={ReactImg}
        description1="React JS Templete"
        description2="powered by Vite"
    />
</div>
)}

export default CodePark