import React from 'react'
import Link from 'next/link'
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Navbaritems from './Navbaritems'

function Navbar() {
  return (
    <nav className="navbar">
    <Link href="/">
        <div className='flex items-center gap-2.5 cursor-pointer'>
           <img 
               src="/images/logo.svg" 
               alt="Logo" 
               width={46} height={44}  
           />

        </div>
    </Link>
   <div className="flex items-center gap-8">
      <Navbaritems />
      <SignedOut>
          <SignInButton>
              <button className="btn-signin">Sign In</button>
          </SignInButton>
      </SignedOut>
      <SignedIn>
          <UserButton />
      </SignedIn>
    </div>
    </nav>
  )
}

export default Navbar