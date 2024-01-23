import {  SignedIn, UserButton,SignedOut,SignInButton } from '@clerk/clerk-react';

function LoginIn() {
  return (
    <>
      <SignedIn>
        <UserButton afterSignOutUrl="/" />
      </SignedIn>
      <SignedOut>
        <SignInButton mode='modal' />
      </SignedOut>
    </>
  );
}

export default LoginIn;