
import JobsList from '@/components/JobsList'
import React from 'react'
import SearchForm from '@/components/SearchForm'
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query'
import { getAllJobsAction } from '@/utils/actions'






const Home = async () => {  
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery({
    queryKey: ['', '','all'],
    queryFn: () => getAllJobsAction({}),
  })


  return (
    <HydrationBoundary state={dehydrate(queryClient)}>

      <div className='grid grid-cols-4 '>
        <div className='h-800 bg-gray-300 '>
          <div className='col-span-1'>
           <SearchForm />
          </div>
        </div>

        <div className='col-span-3 '>
            <JobsList />  
        </div>
      </div>

    </HydrationBoundary>


    

  )
}

export default Home