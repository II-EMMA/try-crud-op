'use client'
import { getTheProduct } from "@/utilis/actions/showProduct";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { use, useEffect, useState } from "react";

export default function SubProductpage({params}) {
   
    const router = useRouter()
    const { id } = use(params); 
    const [ product , setProduct ] = useState(null)

  
        useEffect(() => {
        async function fetchProduct() {
            const data = await getTheProduct(id);
            setProduct(data);
        }
        fetchProduct();
        }, [id]);
    


    const EditHandeler = (id) => {
        router.push(`/create-product/${id}`);
      } 

  return (
    <>
        <section className="flex flex-col h-screen justify-center items-center gap-3 text-black">
         <h1 className='absolute top-3 text-white font-extrabold text-3xl w-full flex justify-center pt-5'>User</h1>
    
                <div className='relative border-b w-full flex justify-between flex-col bg-[#C61350] rounded-xl max-w-4/5 h-2/5 mx-auto py-4 flex-wrap'>
                
                   <div className='flex justify-between flex-wrap gap-4 px-5'>
                      <p className='break-words font-bold text-3xl'>{product?.product_name}</p>
                      <p className='font-semibold text-2xl'>{product?.product_price}</p>
                   </div>
                     
                     <div className="flex items-center flex-col gap-y-0.5">
                      {product?.sub_products?.map( subProduct =>(
                         <p key={subProduct?._id} className='break-words mx-auto font-medium text-2xl'>{subProduct?.label}</p>
                       ))
                      }
                     </div>

                     <button onClick={(event)=> EditHandeler(product?._id)} className='absolute -right-[8px] -top-2 text-white cursor-pointer'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-square-pen-icon lucide-square-pen"><path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"/></svg>
                     </button>  

               </div>
    
        </section>
    
          <div className="absolute w-full bottom-0 flex justify-center flex-row gap-x-4">
            <button className='border rounded-4xl font-medium border-white text-white my-5 mx-auto flex items-center py-2.5 px-5'>
               <Link href='/products'>Products</Link> 
            </button> 
            <button className='border rounded-4xl font-medium border-white text-white my-5 mx-auto flex items-center py-2.5 px-5'>
               <Link href='/'>Home</Link> 
            </button> 
          </div>  
    </>
  )
}
