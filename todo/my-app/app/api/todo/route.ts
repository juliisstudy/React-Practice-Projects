import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client'
import {createTodoSchema} from '@/app/validation'
const prisma = new PrismaClient()

async function main() {

}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })

export async function POST(request:NextRequest){
    const body = await request.json()
    const validation = createTodoSchema.safeParse(body)

    if(!validation.success)
        return NextResponse.json(validation.error.format(),{status:400})

    const newList = await prisma.list.create({
        data:{title:body.title,detail:body.detail}
    })
    
    return NextResponse.json(newList,{status:201})
}