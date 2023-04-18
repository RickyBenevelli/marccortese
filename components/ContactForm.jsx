import React, {useState} from 'react'
import { useRouter } from "next/router";

// form:
import { useForm } from "react-hook-form";
import { sendContactForm } from '@/lib/api.js'
import dayjs from 'dayjs'

const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isError, setIsError] = useState(false)
  const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();
  const {pathname} = useRouter();

  const onSubmit = async (data) => {
    data.date = dayjs(new Date()).format('DD MMMM YYYY, HH:mm')
    data.page = pathname;
    try {
      await sendContactForm(data)
      setIsSubmitted(true)
      setIsError(false)
      reset()
    }
    catch (error) {
      console.log(error)
      console.log('ERROR RECEVING IN CLIENT')
      setIsError(true)
      setIsSubmitted(false)
      reset()
    }
  }
  return (
    <div>

        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col items-end text-black'>

          <input placeholder='Name' {...register("name", { required: true })} className={`w-full mt-3 mb-1 p-2 rounded-md ${errors.name ? "border-[3px] border-[#cc0000]" : ""}`}/>
          {errors.name && <div className='w-full text-left text-[#cc0000]'>This field is required</div>}
          
          <input placeholder='Email' {...register("email", { required: true, pattern: {value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/ , message: "Email is not valid"} })} className={`w-full mt-3 mb-1 p-2 rounded-md ${errors.name ? "border-[3px] border-[#cc0000]" : ""}`}/>
          {errors.email && errors.email.type === "required" && <div className='w-full text-left text-[#cc0000]'>This field is required</div>}
          {errors.email && errors.email.type === "pattern" && <div className='w-full text-left text-[#cc0000]'>{errors.email?.message}</div>}

         <textarea placeholder='Your requests' {...register("message")} className={`w-full mt-3 mb-1 p-2 rounded-md`}/>

          {errors.exampleRequired && <span>This field is required</span>}
          
          <span>
            <input type="submit" placeholder='Send' value="Send" className='text-right py-2 md:py-4 cursor-pointer text-white'/>
          </span>
          <div className='w-full flex flex-col items-center text-center text-white'>
            {isSubmitted && <p>Thank you for contacting us</p>}
            {isError && <p className='text-[#cc0000]'>Something went wrong</p>}
          </div>
        </form>
    </div>
  )
}

export default ContactForm