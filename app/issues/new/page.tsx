'use client'

import React, { useState } from 'react'
import { Button,TextField ,Callout, Text} from '@radix-ui/themes'
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { useForm,Controller } from 'react-hook-form';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import {zodResolver} from '@hookform/resolvers/zod';
import { createIssueSchema } from '@/app/validationSchemas';
import {z} from 'zod';
import ErrorMessage from '@/app/components/ErrorMessage';
import Spinner from '@/app/components/Spinner';
// interface IssueForm{
//     title:string;
//     description:string;
// }
type IssueForm=z.infer<typeof createIssueSchema>;

export default function NewIssuesPage() {

    
    const {register,control,handleSubmit,formState:{errors,isSubmitting}}=useForm<IssueForm>({
        resolver:zodResolver(createIssueSchema)
    });
    const [error,setError]=useState('')

    const onSubmit=handleSubmit(async(data)=>{
        try {
        
            await axios.post("/api/issues",data)
            router.push("/issues")
            
        } catch (error) {
          
            setError('An unexpected error occurred.')
        }
    }
        )

   const router=useRouter();
  return (
    <div className='max-w-xl '>
        {
            error && 
        <Callout.Root color='red' className='mb-5'>
            <Callout.Text>{error}</Callout.Text>
        </Callout.Root>
        }
    <form
        className='space-y-5'
        onSubmit={onSubmit}
        >
      <TextField.Root>
        <TextField.Input placeholder='Title' {...register('title')}/>
      </TextField.Root>
      <ErrorMessage>{errors.title?.message}</ErrorMessage>
      {/* {errors.title && <Text color='red'>{errors.title.message}</Text>} */}
      <Controller
        name='description'
        control={control}
        render={({field})=><SimpleMDE placeholder='Description' {...field}/>}
      />
        <ErrorMessage>{errors.description?.message}</ErrorMessage>
        
      {/* <TextArea placeholder='Description' /> */}
      <Button 
        disabled={isSubmitting}>
             Submit New Issue {isSubmitting && <Spinner/>}
      </Button>
    </form>
    </div>
  )
}
