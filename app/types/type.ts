import { number } from "zod"

export interface Post {
    id: number
    title: string
    category: string
    income: string 
    createdAt: Date
}