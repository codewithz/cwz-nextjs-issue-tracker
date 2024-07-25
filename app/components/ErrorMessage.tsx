import React, { PropsWithChildren } from 'react'
import { Text } from '@radix-ui/themes'

export default function ErrorMessage({children}:PropsWithChildren) {
    if(!children){
        return null;
    }
  return (
    <div>
      <Text color='red' as="p">{children}</Text>
    </div>
  )
}
