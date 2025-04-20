import {
    SignInButton,
    SignUpButton,
    SignedIn,
    SignedOut,
    UserButton,
  } from '@clerk/nextjs'
import ClerkBtn from '../_components/ClerkBtn'
import { currentUser } from '@clerk/nextjs/server'
import { addUserClerk } from '@/utilis/actions/addUserClerk'



export default async function ClerkPage() {
    const user = await currentUser()
    if(user){
      addUserClerk(user)
    }

  return (
    <div className='flex text-white flex-col gap-y-9 min-h-screen justify-center items-center'>
        <SignedOut>
              <SignInButton />
              <SignUpButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
        </SignedIn>
       
       {/* <ClerkBtn/> */}

    </div>
  )
}
