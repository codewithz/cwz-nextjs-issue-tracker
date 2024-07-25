'use client'

import React from 'react'
import { Button,TextField } from '@radix-ui/themes'
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
export default function NewIssuesPage() {
  return (
    <div className='max-w-xl space-y-5' >
      <TextField.Root>
        <TextField.Input placeholder='Title' />
      </TextField.Root>
      <SimpleMDE placeholder='Description' />
      {/* <TextArea placeholder='Description' /> */}
      <Button> Submit New Issue</Button>
    </div>
  )
}
