import React from "react";
import Logo from "next/image";
import { Button } from "@/components/ui/button";
import { HugeiconsIcon } from "@hugeicons/react";
import { Github01Icon } from "@hugeicons/core-free-icons";

function Navbar() {
  return (
    <ul className="flex items-center justify-between mx-6 md:mx-78">
      <li>
        <Logo src="/logotr.png" alt="Get words logo" width={150} height={150} />
      </li>
      <div className="flex space-x-7 items-center">
        <li>
          <Button className="px-10 py-5.5 text-xl cursor-pointer">
            Sign in
          </Button>
        </li>
        <li className="cursor-pointer">
          <a href="https://github.com/BerryUY/getwords" target="_blank" rel="noopener noreferrer">
            <HugeiconsIcon
              icon={Github01Icon}
              size={40}
              strokeWidth={1.1}
              className="hover:text-accent transition-colors"
            />
          </a>
        </li>
      </div>
    </ul>
  );
}

export default Navbar;
