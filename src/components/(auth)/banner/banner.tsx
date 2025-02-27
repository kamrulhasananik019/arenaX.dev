"use client"

import React from 'react'
import { useUser } from '@clerk/nextjs'
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";

export default function Banner() {
  const { isSignedIn, user, isLoaded } = useUser()

  if (!isLoaded) {
    return <div>Loading...</div>
  }

  if (!isSignedIn) {
    return (
      <div className="">
        <h2 className="text-xl font-semibold mb-4">Welcome! Please Sign In</h2>
        <SignedOut>
          <div className="flex gap-4">
            <SignInButton>
              <button className="px-6 py-2 text-white bg-gradient-to-r from-gray-500 to-black-500 rounded-lg shadow-md hover:scale-105 transition-transform">
                Sign In
              </button>
            </SignInButton>
            <SignUpButton>
              <button className="px-6 py-2 text-white bg-gradient-to-r from-gray-500 to-yellow-500 rounded-lg shadow-md hover:scale-105 transition-transform">
                Sign Up
              </button>
            </SignUpButton>
          </div>
        </SignedOut>
      </div>
    )
  }

  return (
    <div className="p-4 rounded-2xl max-w-md shadow-sm bg-gray-900 text-white">
      <div className="space-y-4">
        {/* Profile section */}
        <div className="flex items-center gap-4">
          {/* Profile Image */}
          <img
            src={user?.imageUrl}  
            className="w-12 h-12 rounded-full object-cover"
            alt={user?.fullName || "User Profile"} 
          />

          {/* User Details */}
          <div className="leading-tight">
            <p className="text-sm text-gray-300 break-all">
              {user?.primaryEmailAddress?.emailAddress || user?.emailAddresses?.[0]?.emailAddress}
            </p>
            <p className="text-base font-semibold">{user?.fullName || "No Name Available"}</p>
          </div>
        </div>

        {/* Achievement section */}
        <div className="flex items-center gap-4">
          <div className="flex-1 space-y-2">
            <div className="h-2.5 bg-gray-600 rounded-full w-full" />
            <div className="h-2 bg-gray-600 rounded-full w-2/3" />
          </div>
          <span className="text-lg font-semibold text-gray-300">1350XP</span>
        </div>

        {/* User Button */}

      </div>
    </div>
  )
}
