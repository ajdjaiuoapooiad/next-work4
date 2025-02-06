'use client'
import { Post } from '@/app/types/type'
import React from 'react'
import JobCard from './JobCard'
import { useSearchParams } from 'next/navigation'
import { useQuery } from "@tanstack/react-query"
import { getAllJobsAction } from '@/utils/actions'

// interface CardListProps {
//   posts: Post[] 
// }

const JobsList = () => {
  const searchParams = useSearchParams()
  const search = searchParams.get('search') || '';
  const jobStatus = searchParams.get('jobStatus') || 'all';
  const jobIncome = searchParams.get('jobIncome') || 'all';

  const {data, isPending} = useQuery({
    queryKey: ['' ,search ?? '', jobStatus, jobIncome ],
    queryFn: () => getAllJobsAction({search, jobStatus, jobIncome}),
  })
  const jobs = data?.jobs || [];

  if(isPending) return <div>Loading...</div>;
  if(jobs.length < 1) return <div>No jobs found.</div>;


  return (

    <>

      <div className='mx-10 my-10'>
        <div className='text-2xl font-bold'>求人一覧</div>
        <div className='text-1xl '>該当件数: {jobs.length}件</div>
      </div>
      
      <div className='mx-12'>
        
        <div className=''>
          {jobs.map((job) => {
            return (
              <JobCard key={job.id} job={job} />
            )
          })}
        </div>


      </div>
    </>
  )
}

export default JobsList