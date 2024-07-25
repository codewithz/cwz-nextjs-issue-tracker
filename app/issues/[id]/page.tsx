import prisma from '@/prisma/client'
import { notFound } from 'next/navigation';
import React from 'react'
import delay from 'delay';

interface Props{
    params:{id:string}
}

export default async function IssueDetailsPage({params:{id}}:Props) {

    await delay(2000);
    
    const issue=await prisma.issue.findUnique({
        where:{
            id:parseInt(id)
        }
    });

    if(!issue) {
        notFound()
    }
  return (
    <div>
      <p>{issue.title}</p>
      <p>{issue.description}</p>
      <p>{issue.status}</p>
      <p>{issue.createdAt.toDateString()}</p>
    </div>
  )
}
