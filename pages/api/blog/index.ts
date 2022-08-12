import {
    NextApiRequest,
    NextApiResponse
} from 'next'
import prisma from '../../../libs/prisma'

export default async (
    req: NextApiRequest,
    res: NextApiResponse
) => {
    const data = prisma.blog.findFirst({
        take: 20
    })
    res.json(data)
}