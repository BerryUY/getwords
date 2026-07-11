import React from 'react'
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { HugeiconsIcon } from "@hugeicons/react"
import { Leaf01Icon, FlowerIcon, Globe02Icon, Cupcake01Icon } from "@hugeicons/core-free-icons"

const words = [
    {
        icon: Leaf01Icon,
        iconClass: "bg-green-100 text-green-500",
        word: "Serendipity",
        meaning: "Finding something good without looking for it.",
    },
    {
        icon: FlowerIcon,
        iconClass: "bg-pink-100 text-pink-500",
        word: "Ephemeral",
        meaning: "Lasting a very short time.",
    },
    {
        icon: Globe02Icon,
        iconClass: "bg-blue-100 text-blue-500",
        word: "Wanderlust",
        meaning: "A strong desire to travel and explore.",
    },
    {
        icon: Cupcake01Icon,
        iconClass: "bg-purple-100 text-purple-500",
        word: "Mellow",
        meaning: "Calm, soft, relaxed.",
    },
]

function Preview() {
    return (
        <section className='mx-auto mt-24 flex max-w-2xl flex-col items-center px-6'>
            <Card className='w-full gap-6 p-6 shadow-xl'>
                <div className='flex items-center justify-between'>
                    <h3 className='text-lg font-semibold text-accent font-chewy'>My words</h3>
                    <span className='rounded-full bg-muted px-3 py-1 text-sm text-muted-foreground'>English</span>
                </div>
                <ul className='flex flex-col'>
                    {words.map((w, i) => (
                        <li
                            key={w.word}
                            className={`flex items-start gap-3 py-3 ${i !== words.length - 1 ? "border-b border-foreground/10" : ""}`}
                        >
                            <span className={`flex size-9 shrink-0 items-center justify-center rounded-lg ${w.iconClass}`}>
                                <HugeiconsIcon icon={w.icon} size={20} />
                            </span>
                            <div>
                                <p className='font-semibold text-card-foreground'>{w.word}</p>
                                <p className='text-sm text-muted-foreground'>{w.meaning}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </Card>

            <div className='mt-16 flex flex-col items-center space-y-6 text-center'>
                <h2 className='text-5xl font-chewy'>Are you learning a language?</h2>
                <p className='max-w-md text-xl text-(--gray)'>
                    GetWords is the simple place to gather everything you're learning, word by word.
                </p>
                <Button className='cursor-pointer rounded-full bg-accent px-10 py-6 text-xl text-primary shadow-[0_6px_0_0_#c95a32] transition-transform duration-150 hover:bg-accent'>
                    Start free
                </Button>
            </div>
        </section>
    )
}

export default Preview
