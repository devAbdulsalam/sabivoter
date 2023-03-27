// import React from 'react'
import {navLinks} from '../../Data'
import Link from 'next/link'

const Sidebar = () => {
  return (
    <div className="w-1/4 bg-black text-white p-4 flex items-center justify-center h-[100%] mt-10">
        <ul className='py-10 space-y-8 capitalize text-[15px]'>
            {navLinks.map((item, idx) => {
                 return (
            <li
              className='text-white hover:text-accent cursor-pointer'
              key={idx}
              >
              <Link href={item.href}>{item.name}</Link>
            </li>)
            })}
            
          <li>
            <>LoginButton</>
          </li>
        </ul>
    </div>
  )
}

export default Sidebar