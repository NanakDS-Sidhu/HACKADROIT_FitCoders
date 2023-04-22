import React from 'react'

export default function MyMessage(props) {
  return (
    <div>
                  <p className='flex justify-end mb-4'>Username</p>
        <div class="flex justify-end mb-4">

            <div
              class="mr-2 py-3 px-4 bg-blue-400 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white"
            >
              {props.data.Content}
            </div>
            <img
              src="https://images.unsplash.com/photo-1589254065909-b7086229d08c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              class="object-cover h-8 w-8 rounded-full"
              alt=""
            />
          </div>
    </div>
  )
}
