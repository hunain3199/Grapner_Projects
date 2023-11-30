
import React from 'react'
import { SignInButton } from "@clerk/nextjs";
import { auth, currentUser } from "@clerk/nextjs";
import { UserButton } from "@clerk/nextjs";
import { Button } from './ui/button';
import { Mail } from 'lucide-react';
const Login = async () => {
    
    const { userId } = auth();
    const user = await currentUser()
  return (
    <div className='flex justify-center items-center'>
                {!user ? <SignInButton>
                    <Button>

                        <Mail className="mr-2 h-4 w-4" />   Login
                    </Button>
                </SignInButton>
                    : <UserButton afterSignOutUrl="/"  />}
            </div>
  )
}

export default Login
