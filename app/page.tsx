import Image from "next/image";
import Navbar from "@/components/landing/Navbar";
import Cards from "@/components/landing/Cards";
import Preview from "@/components/landing/Preview";
import { Button } from "@/components/ui/button"
import { HugeiconsIcon } from "@hugeicons/react"
import { HeartIcon } from "@hugeicons/core-free-icons"

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="max-w-fit text-center mx-auto mt-12 space-y-8 flex flex-col items-center">
        <h1 className="text-7xl font-chewy">Your <span className="text-accent">personal dictionary</span>,<br/> your way.</h1>
        <p className="text-xl max-w-1/2 text-(--gray)">Write down the words you don't know, write their meanings in your own words, and organize them however you like. Simple, straightforward.</p>
        <Button className="bg-accent text-primary text-xl px-10 py-6 rounded-full shadow-[0_6px_0_0_#c95a32] transition-transform duration-150 hover:bg-accent cursor-pointer">
          Start free
        </Button>
      </div>
      <Cards/>
      <Preview/>
      <footer className="max-w-fit mx-auto mt-30 mb-10">
        <p className="flex gap-1">Made with <HugeiconsIcon icon={HeartIcon} className="text-red-500/80" /> by <a href="https://github.com/BerryUY" target="_blank" rel="noopener noreferrer" className="underline hover:text-accent transition-colors">Berry</a>  for curious readers</p>
      </footer>
    </div>
  );
}
