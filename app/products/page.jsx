'use client'

import { deleteProduct } from "@/utilis/actions/deleteProduct";
import { getProductsData } from "@/utilis/actions/getProductsInfo";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function page() {

    const [data , setData] = useState([])
    const router = useRouter()
    
         useEffect(()=>{
            const showData = async () => {
                const productsData = await getProductsData();
                setData(productsData);
            }
            showData()
          },[])
    
          const closeHandeler = (event,id) => {
                  event.stopPropagation();
                  setData(data.filter(user => user._id !== id))
                  deleteProduct(id)
          }

        const goProductPageHandler = (id) =>{
          router.push(`/products/${id}`);
        }
      

        const EditHandeler = (event,id) => {
          event.stopPropagation();
          router.push(`/create-product/${id}`);
        } 

  return ( 
 <>
      <h1 className='w-full my-10 text-white font-extrabold text-xl flex justify-center self-start'>ALL USERS</h1>
     <section className={`min-h-screen ${data.length === 1 ? 'flex justify-center items-center -mt-28' : 'grid grid-cols-1 justify-center items-center gap-3'}`}>

        {data.map(product=>(
            <div 
               onClick={()=> goProductPageHandler(product._id)}
               key={product?._id}
               className='relative cursor-pointer border-b w-full h-full flex justify-between flex-col bg-[#C61350] rounded-xl max-h-52 max-w-4/5 mx-auto py-4 flex-wrap'
            >

              <button onClick={(event)=> closeHandeler(event, product?._id)} className='absolute -left-[15px] -top-5'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-x-icon text-white cursor-pointer lucide-circle-x"><circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/></svg>
              </button>
              
               <div className='flex justify-between flex-wrap gap-4 px-5'>
                  <p className='break-words md:font-bold md:text-2xl'>{product?.product_name}</p>
                  <p className='md:font-semibold'>{product?.product_price}</p>
               </div>
               
               <div className="flex items-center flex-col gap-y-0.5">
                      {product?.sub_products.map( subProduct =>(
                         <p key={subProduct?._id} className='break-words mx-auto font-medium text-2xl'>{subProduct?.label}</p>
                       ))
                      }
               </div>

                <button onClick={(event)=> EditHandeler(event, product?._id)} className='absolute -right-[8px] -top-2 text-white cursor-pointer'>
                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-square-pen-icon lucide-square-pen"><path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"/></svg>
                </button>                 

           </div>
        ))}

    </section>

      <div className={`${data.length === 0 || data.length === 1 ? 'absolute w-full bottom-0 flex justify-center' : ''} flex flex-row gap-x-4`}>
        <button className='border rounded-4xl font-medium border-white text-white my-5 mx-auto flex items-center py-2.5 px-5'>
           <Link href='/create-product'>Create A Product</Link> 
        </button> 
        <button className='border rounded-4xl font-medium border-white text-white my-5 mx-auto flex items-center py-2.5 px-5'>
           <Link href='/'>Home</Link> 
        </button> 
      </div>  
 </>
  )
}
