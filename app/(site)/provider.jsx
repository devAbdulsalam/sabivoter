'use client'
import { session } from 'next-auth'

import { SessionProvider } from 'next-auth/react'

const Provider = ({children, session}) => {
  return (
    <SessionProvider>
      {children}
    </SessionProvider>
  )
}

export default Provider

// function Auth({ children }) {
//   // if `{ required: true }` is supplied, `status` can only be "loading" or "authenticated"
//   const { status } = useSession({ required: true })

//   if (status === "loading") {
//     return <div>Loading...</div>
//   }

//   return children
// }