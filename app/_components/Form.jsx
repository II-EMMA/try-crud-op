'use client'

import { FormGetData } from "@/utilis/actions/form-actions"
import { useRouter } from 'next/navigation';
import { useEffect, useRef } from "react";

export default function Form() {

    const router = useRouter();
    const nameRef = useRef(null);
    const ageRef = useRef(null);
    const emailRef = useRef(null);

    const handlerNavigation = () => {
        router.push('/show-data');
    }

    useEffect(()=>{
       nameRef.current.value = ''
       ageRef.current.value = ''
       emailRef.current.value = ''
    },[])


  return (
    <div className="container">  
    <form className='rounded-lg' id="contact" action={FormGetData}>
    <h3>Contact Me</h3>
    
    <fieldset>
      <input placeholder="Your name" type="text" name='name' required ref={nameRef}/>
    </fieldset>
    <fieldset>
      <input className="border border-black pl-3 text-sm py-1" placeholder="" type="number" name="age" required ref={ageRef}/>
    </fieldset>
    <fieldset>
      <input placeholder="Email Address" type="email" name="email" />
    </fieldset>
    <fieldset>
         <button onClick={handlerNavigation} name="submit" type="submit" id="contact-submit" data-submit="...Sending" required ref={emailRef}>Submit</button>
    </fieldset>
  </form>
 
  
</div>
  )
}
