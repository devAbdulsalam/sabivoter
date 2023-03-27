'use client'
import { useEffect } from "react";

export default function Error({error, reset}) {
  useEffect(()=>{
    console.error(error);
  }, [error])
  return (
    <div className="flex flex-col place-items-center place-content-center h-screen w-full">
      <h2 className='text-xl text-center text-green-400'>Something Went wrong!</h2>
      <button
            type="button"
            onClick={() => reset()}
          >
            Try again?
          </button>
    </div>
  )
}
