'use client'
import React, { useState} from 'react'
import {useRouter} from 'next/navigation'
import { signIn} from 'next-auth/react'
import GoogleLoginButton from 'app/components/auth/GoogleSignInButton'
import Link from 'next/link'


const page = ({searchParams}) => {
  const router = useRouter()
  const [email, setName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setIsError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [isLoading, setIsLoading] = useState(false);


  const handleSubmit = async (e) => {
      e.preventDefault();      
      const data = { email, password}
      setIsLoading(true)
      if(!data){
        return error("Please fill all inputs")
      }
      setIsError(null)
      const res = await signIn('credentials', {email, password, redirect: false, callbackUrl:"/"})
        if(res === ok){
          // console.log(res)
          setSuccess(data.message)
          setIsLoading(false)
          }

        if(!res === ok) {
          console.log(error.message)
          // setIsError(error.message)
          setIsError("all inputs are required")
          setIsLoading(false)
        }
      
  };

  return (
    <div className="text-2xl flex flex-col justify-center items-center">
      {searchParams?.message && <p className='text-red-500 p-px text-center bg-gray-100 rounded-md'>{searchParams?.message}</p>}
      <form onSubmit={handleSubmit} className="w-full md:max-w-[450px] mx-auto shadow-md rounded-md flex flex-col p-2">
        <div className="my-1">
            <label htmlFor="email" className='text-lg font-semibold'>Email</label>
            <input
                onChange={(e) => setName(e.target.value)}
                className="px-3 my-1 py-1.5 text-base w-full font-normal text-gray-500 bg-clip-padding border-2 border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                type="email"
                value={email}
                placeholder="abc@gmail.com"
                id="email"
                name="email"
                autoComplete="email"
            ></input>
        </div>
        <div>                
          <label htmlFor="password" className='text-lg font-semibold'>Password</label>
          <input 
            onChange={(e) => setPassword(e.target.value)}
            className="px-3 my-1 py-1.5 text-base w-full font-normal text-gray-500 bg-clip-padding border-2 border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            type="password"
            value={password}
            placeholder="************"
            id="password" 
          ></input>
        </div>
        <div>
          <button className="bg-[#228e01] w-full text-white py-3 my-2 mt-4 rounded font-semibold text-xl" disabled={isLoading}>
              {isLoading ? "Loging..." : "Login"}
          </button>
          
        </div>
        <div>
        {error && <div className="error duration-500 p-2 bg-red-300 text-red-800 text-center text-lg border-red-700 border-2 rounded-md">{error}</div>}
        {success && <div className="success duration-500 p-2 bg-green-300 text-green-800 text-center text-lg border-green-700 border-2 rounded-md">{success}</div>}                  
        </div>
      </form>
      <div className='mx-auto my-10 flex w-full items-center justify-evenly before:mr-4 before:block before:h-px before:flex-grow before:bg-stone-400 after:ml-4 after:block after:h-px after:flex-grow after:bg-stone-400'>
        or
      </div>
      <GoogleLoginButton />
      <div className="text-base">
        <p className="py-4 text-gray-600">
            Don't have an Account?
            <Link href='/signup' className="text-green-700 cursor-pointer"> Signup</Link>
        </p>
        <button onClick={()=> router.push('/')} className='text-green-500'>forget password</button>
      </div>
    </div>
  )
}

export default page
