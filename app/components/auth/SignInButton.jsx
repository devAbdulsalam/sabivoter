'use client'

import { useSession, signIn, signOut } from 'next-auth/react'
import Image from 'next/image'
import { useState } from 'react'

const SignInButton = () => {
  const { data:session } = useSession()
  const [showProfile, setShowProfile] = useState(false)
  const handleShowProfile = () =>{
    setShowProfile(!showProfile)
  }

  if (session) {
    return (
      <div className='relative h-6 w-6'>
        <button onClick={handleShowProfile}>
        {session?.user?.image ? (
          <Image
            src={session.user.image}
            alt={session.user.name}
            className='inline-block rounded-full'
            fill
          />
        ) : (
          <span className='inline-block h-6 w-6 overflow-hidden rounded-full bg-gray-100'>
            <svg
              className='h-full w-full text-gray-300'
              fill='currentColor'
              viewBox='0 0 24 24'
            >
              <path d='M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z' />
            </svg>
          </span>
        )}</button>
        {showProfile ? 
        <div className={`${showProfile ? 'flex top-[50px]' : 'hidden top-0'} right-0  absolute rounded-md mr-2 bg-white z-[995] transition-all duration-300  place-items-center`}>
          <div className=''>
            <div className='text-green-500 '>
              <h2>{session?.user?.name}</h2>
              <h2>{session?.user?.email}</h2>
              <h2>tttttttttttttt</h2>
            </div>
            <div className='mt-2'>
              <button
                className='text-sm font-medium tracking-wider uppercase text-stone-500'
                onClick={() => signOut()}
              >
                Sign Out
              </button>
            </div>
          </div>
        </div> : ''}
      </div>

      
    )
  }

  return (
    <button
      className='text-sm font-medium tracking-wider uppercase text-stone-500'
      onClick={() => signIn()}
    >
      Sign In
    </button>
  )
}

export default SignInButton
