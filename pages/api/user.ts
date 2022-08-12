import prisma from "@libs/prisma";
import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";

export default async function createUser(
    req:NextApiRequest,
    res:NextApiResponse
) {
    const { email, name } = req.body
    try {
        await prisma.user.create({
            data: { email, name }
        })
        res.json({status: "Success"})
    } catch (err) {
        res.json({status: "UserExist"})
    }
}