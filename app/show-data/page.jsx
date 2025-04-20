'use client'
import { useEffect, useState } from 'react'
import { getFormData } from '@/utilis/actions/getFormData'
import Link from 'next/link'
import { deleteUser } from '@/utilis/actions/deleteUser'
export default function page() {

      const [data , setData] = useState([])

      useEffect(()=>{
        const showData = async () => {
            const dataInfo = await getFormData();
            setData(dataInfo);
        }
        showData()
      },[])


      const closeHandeler = (id) => {
        setData(data.filter(user => user._id !== id))
        deleteUser(id)
      }

  return (
 <>
  <h1 className='text-white font-extrabold text-xl flex justify-center pt-5'>ALL USERS</h1>
    <section className="mx-9 my-4 grid grid-cols-1 justify-center items-center min-h-screen gap-3">

        {data.map(user=>(
            <div key={user?._id} className='relative border-b w-full h-full flex justify-between flex-col bg-[#C61350] rounded-xl max-h-32 max-w-4/5 mx-auto py-4 flex-wrap'>
              <button onClick={()=> closeHandeler(user?._id)} className='absolute -right-[15px] -top-5'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-x-icon text-white cursor-pointer lucide-circle-x"><circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/></svg>
              </button>
               <div className='flex justify-between flex-wrap gap-4 px-5'>
                  <p className='break-words md:font-bold md:text-2xl'>{user?.name}</p>
                  <p className='md:font-semibold'>{user?.age}</p>
               </div>
               <p className='break-words mx-auto font-medium sm:text-lg text-[10px]'>{user?.email}</p>
           </div>
        ))}

    </section>

      <div className={`${data.length === 0 || data.length === 1 ? 'absolute w-full bottom-0 flex justify-center' : ''} flex flex-row gap-x-4`}>
        <button className='border rounded-4xl font-medium border-white text-white my-5 mx-auto flex items-center py-2.5 px-5'>
           <Link href='/form'>Back To Form</Link> 
        </button> 
        <button className='border rounded-4xl font-medium border-white text-white my-5 mx-auto flex items-center py-2.5 px-5'>
           <Link href='/'>Home</Link> 
        </button> 
      </div>  
 </>
  )
}
