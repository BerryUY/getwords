'use client'

import Image from "next/image";
import Navbar from "@/components/landing/Navbar";
import Cards from "@/components/landing/Cards";
import Preview from "@/components/landing/Preview";
import { Button } from "@/components/ui/button";
import { HugeiconsIcon } from "@hugeicons/react";
import { HeartIcon } from "@hugeicons/core-free-icons";
import { SignInButton, SignUpButton, useAuth } from '@clerk/nextjs';
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function Home() {
  const { isSignedIn } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (isSignedIn) {
      router.push('./dictionary')
    }
  }, [isSignedIn, router])

  if (isSignedIn) return null

  return (
    <div>
      <Navbar />
      <div className="max-w-4xl text-center mx-auto mt-12 space-y-8 flex flex-col items-center px-6">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-chewy">Your <span className="text-accent">personal dictionary</span>,<br/> your way.</h1>
        <p className="text-lg md:text-xl max-w-xl text-(--gray)">Write down the words you don't know, write their meanings in your own words, and organize them however you like. Simple, straightforward.</p>
        <SignUpButton>
          <Button className="bg-accent text-primary text-lg md:text-xl px-8 md:px-10 py-5 md:py-6 rounded-full shadow-[0_6px_0_0_#c95a32] transition-transform duration-150 hover:bg-accent cursor-pointer">
            Start free
          </Button>
        </SignUpButton>
      </div>
      <Cards/>
      <Preview/>
      <footer className="max-w-fit mx-auto mt-30 mb-10 px-6">
        <p className="flex flex-wrap justify-center gap-1 text-center">Made with <HugeiconsIcon icon={HeartIcon} className="text-red-500/80" /> by <a href="https://github.com/BerryUY" target="_blank" rel="noopener noreferrer" className="underline hover:text-accent transition-colors">Berry</a>  for curious readers</p>
      </footer>
    </div>
  );
}
