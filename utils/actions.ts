'use server'

import { z } from "zod"
import prisma from "./db"

import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import { createFormType, JobType } from "./types"
import { Prisma } from "@prisma/client" 


export const post = async ({
  title, 
  category, 
  income
}: createFormType) => {
    await prisma.post.create({
        data: {
            title,
            category,
            income,
        },
    })
    revalidatePath('/')
    redirect('/')
}

type GetAllJobsActionType = {
    search?: string;
    jobStatus?: string;
    jobIncome?: number;
}

export async function getAllJobsAction({
    search,
    jobStatus,
}: GetAllJobsActionType): Promise<{
    jobs: JobType[];
    count: number;
}>{
    try{
        let whereClause: Prisma.PostWhereInput = {}

        if (search) {
            whereClause = {
              ...whereClause,
              OR: [
                {
                  title: {
                    contains: search,
                  },
                },
                {
                  category: {
                    contains: search,
                  },
                },
              ],
            };
          }

        if(jobStatus && jobStatus !== 'all'){
            whereClause = {
                ...whereClause,
                category: jobStatus,
            }
        }
        const jobs: JobType[] = await prisma.post.findMany({
            where: whereClause,
            orderBy: {
                createdAt: 'desc',
            },
        })
        return {jobs, count: 0,}
    }catch (error) {
        console.log(error);
        return {jobs: [], count: 0,}
    }
}