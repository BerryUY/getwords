import React from "react";
import Logo from "next/image";
import { Button } from "@/components/ui/button";
import { HugeiconsIcon } from "@hugeicons/react";
import { Github01Icon } from "@hugeicons/core-free-icons";
import { SignInButton } from "@clerk/nextjs"

function Navbar() {
  return (
    <ul className="flex items-center justify-between max-w-6xl mx-auto px-6">
      <li>
        <Logo src="/logotr.png" alt="Get words logo" width={150} height={150} className="w-28 md:w-[150px] h-auto" />
      </li>
      <div className="flex space-x-4 md:space-x-7 items-center">
        <li className="cursor-pointer">
          <a href="https://github.com/BerryUY/getwords" target="_blank" rel="noopener noreferrer">
            <HugeiconsIcon
              icon={Github01Icon}
              size={40}
              strokeWidth={1.1}
              className="size-8 md:size-10 hover:text-accent transition-colors"
            />
          </a>
        </li>
        <li>
        <SignInButton>
          <Button className="px-6 md:px-10 py-4 md:py-5.5 text-base md:text-xl cursor-pointer">
            Sign in
          </Button>
        </SignInButton>
        </li>
      </div>
    </ul>
  );
}

export default Navbar;
