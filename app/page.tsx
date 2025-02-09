
import JobsList from '@/components/JobsList'
import React, { Suspense } from 'react'
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
    <>
      <HydrationBoundary state={dehydrate(queryClient)}>

        <div className='grid grid-cols-4 '>
          <div className='h-1200 h-screen bg-gray-300 '>
            <div className='col-span-1'>
              <Suspense>
                <SearchForm />
              </Suspense>
            </div>
          </div>

          <div className='col-span-3 '>
              <JobsList />  
          </div>
        </div>

      </HydrationBoundary>
    </>
  )
}

export default Home