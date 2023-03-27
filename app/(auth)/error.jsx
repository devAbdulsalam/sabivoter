'use client'
import { useState, useEffect } from "react";

export default function Error({error, reset}) {
  useEffect(()=>{
    const [error, setError] = useState(null)
    setError(error)
    console.error(error);
  }, [error])
  return (
    <div className="flex flex-col place-items-center place-content-center h-screen w-full">
      <h2 className='text-2xl text-center font-bold text-slate-800 mb-2'>Something Went wrong!</h2>
      <p>{error}</p>
      <button
            type="button" className="text-green-400 text-xl"
            onClick={() => reset()}
          >
            Try again?
          </button>
    </div>
  )
}
