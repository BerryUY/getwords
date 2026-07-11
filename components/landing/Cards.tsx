import React from 'react'
import { Card } from "@/components/ui/card"
import { HugeiconsIcon } from "@hugeicons/react"
import { Book02Icon, Folder02Icon, SparklesIcon } from "@hugeicons/core-free-icons"

const cards = [
  {
    icon: Book02Icon,
    title: "Add words and their meanings",
    description: "Save every new word along with the definition that you understood, in your own words.",
  },
  {
    icon: Folder02Icon,
    title: "Organize by category",
    description: "Group your words however you want: by language, by book, by topic. You decide the order.",
  },
  {
    icon: SparklesIcon,
    title: "Practice with AI generated quizzes",
    description: "Review your own words with questions automatically created from your list.",
    badge: "Próximamente",
  },
]

function Cards() {
  return (
    <div className='grid grid-cols-3 max-w-280 gap-6 mt-20 mx-auto'>
      {cards.map((card) => (
        <Card
          key={card.title}
          className='relative overflow-visible p-8 border border-dashed border-gray-500 gap-4'
        >
          {card.badge && (
            <span className='absolute -top-3 right-6 z-10 rounded-full bg-amber-400 px-3 py-1 text-sm font-semibold text-white'>
              {card.badge}
            </span>
          )}
          <HugeiconsIcon icon={card.icon} size={40} className='text-amber-400' />
          <h4 className='text-2xl font-semibold text-accent/90'>{card.title}</h4>
          <p className='text-(--gray)'>{card.description}</p>
        </Card>
      ))}
    </div>
  )
}

export default Cards
