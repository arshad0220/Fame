import React from 'react'
import {SignedOut, SignInButton} from '@clerk/clerk-react';
const Logout = () => {
  return (
    <>
    <SignedOut>
        <SignInButton mode='modal' />
    </SignedOut>
    </>
  )
}

export default Logout
