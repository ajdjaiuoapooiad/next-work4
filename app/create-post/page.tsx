'use client'

import { Button } from '@/components/ui/button'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { post } from '@/utils/actions'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

export const formSchema = z.object({
  title: z
    .string(),
  category: z
    .string(),
  income: z
    .coerce.number(),
});


const CreatePage =  () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
      category: '',
      income: 0,
    }
  })

  async function onSubmit(value: z.infer<typeof formSchema>){
    const { title, category, income } = value
    post({ title, category, income })
  }



  return (
    <div className='container px-12 py-12'>

      <div className='text-4xl font-bold py-5'>Createページ</div>
      <Form {...form}  >
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" {...field} />
                </FormControl>
                
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Category</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" {...field} />
                </FormControl>
                
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="income"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Income</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" {...field} />
                </FormControl>
                
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit"  className='bg-gray-500 hover:bg-gray-600'>投稿</Button>
        </form>
      </Form>
    </div>
  )
}

export default CreatePage