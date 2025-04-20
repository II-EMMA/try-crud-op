import Link from "next/link";
import DataPage from "./data/page";

export default function Home() {
  return (
    <>
    <div className="capitalize text-white min-h-screen flex flex-col gap-y-16 justify-center items-center text-5xl">
      
       <Link href='/data'>
         Data
       </Link>
       
       <Link href='/form'>
         Form
       </Link>
       
       <Link href='/show-data'>
         Show data
       </Link>
       
       <Link href='/clerk'>
         Clerk
       </Link>
       
       <Link href='/create-product'>
          create product
       </Link>
       
       <Link href='/products'>
          products
       </Link>
    </div>

    </>
  );
}
