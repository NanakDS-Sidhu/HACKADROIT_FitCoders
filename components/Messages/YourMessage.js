import React from 'react'

export default function YourMessage(props) {
  return (
    <div>
        <p className='flex justify-start mb-4'>Username</p>
        <div class="flex justify-start mb-4">
            <img
              src="https://images.unsplash.com/photo-1589254065909-b7086229d08c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              class="object-cover h-8 w-8 rounded-full"
              alt=""
            />
            <div
              class="ml-2 py-3 px-4 bg-gray-400 rounded-br-3xl rounded-tr-3xl rounded-tl-xl text-white"
            >
            {props.data.Content}
            </div>
          </div>
    </div>
  )
}
