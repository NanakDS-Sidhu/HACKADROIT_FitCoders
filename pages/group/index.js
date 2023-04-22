import React from 'react'
import { useRouter } from 'next/router'
import UserListChat from '@/components/UserListChat'
import MessageList from '@/components/MessageList'
export default function index() {
    const router =useRouter()
    const group =router.asPath.toString()
    console.log(router)
  return (
    <div className='flex'>

      {/* <UserListChat></UserListChat> */}
      <MessageList></MessageList>

    </div>
  )
}
