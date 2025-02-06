import { Post } from '@/app/types/type'
import { JobType } from '@/utils/types'
import React from 'react'




// interface CardProps {
//   post: Post 
// }


const JobCard = ({job}: {job: JobType}) => {
  const {id, title, category, income} = job

  return (
    <div key={id} className='border p-5 my-5'>
      <div className='text-2xl font-bold' >{title}</div>
      <p className='py-3'>カテゴリ: {category}</p>
      <p>年収: {income}万円</p>
    </div>
  )
}

export default JobCard