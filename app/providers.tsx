
import JobsList from '@/components/JobsList'
import React from 'react'
import { Post } from './types/type'
import SearchForm from '@/components/SearchForm'
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query'
import { getAllJobsAction } from '@/utils/actions'




// export async function getData() {
//   const res = await fetch('http://localhost:3000/api/v1', {
//     cache: 'no-store',
//   })
//   const data: Post[] = await res.json()
//   console.log(data);
//   return data;
// }

const Home = async () => {  
  // const posts = await getData();
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery({
    queryKey: ['', '','all','all'],
    queryFn: () => getAllJobsAction({}),
  })


  return (
    <HydrationBoundary state={dehydrate(queryClient)}>

      <div className='grid grid-cols-4 '>
        <div className='h-800 bg-gray-300 bg-cover '>
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