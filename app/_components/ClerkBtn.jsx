'use client'

import { addUserClerk } from "@/utilis/actions/addUserClerk"

export default function ClerkBtn() {
  return (
    <button onClick={addUserClerk} className='text-black cursor-pointer flex justify-center items-center py-5 px-10 rounded-full border'>
           Send User Data
    </button>
  )
}
