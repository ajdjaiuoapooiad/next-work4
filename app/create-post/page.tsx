'use client'

import { Button } from '@/components/ui/button'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { post } from '@/utils/actions'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { createFormSchema, createFormType } from '@/utils/types'

const CreatePage =  () => {
  const form = useForm({
    resolver: zodResolver(createFormSchema),
    defaultValues: {
      title: '',
      category: '',
      income: 0,
    }
  })

  async function onSubmit(value: createFormType){
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
                <FormLabel>タイトル</FormLabel>
                <FormControl>
                  <Input placeholder="Title" {...field} />
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
                <FormLabel>カテゴリ</FormLabel>
                <FormControl>
                  <Input placeholder="Category" {...field} />
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
                <FormLabel>年収（万円）</FormLabel>
                <FormControl>
                  <Input placeholder="Income" {...field} />
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