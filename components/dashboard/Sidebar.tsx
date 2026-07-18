"use client"

import React from 'react'

const categories = [
  { name: 'All', active: true },
  { name: 'Exams' },
  { name: 'Work' },
  { name: 'Travel' },
  { name: 'Tech' },
]

function Sidebar() {
  return (
    <aside className="flex w-full md:w-72 flex-col gap-6 bg-sidebar text-sidebar-foreground p-6 shadow-md border-b md:border-b-0 md:border-r border-sidebar-border md:min-h-screen md:rounded-r-[2.5rem]">
      <div className="rounded-2xl border border-sidebar-border bg-sidebar-accent/50 p-4 shadow-sm">
        <h4 className="font-chewy text-3xl text-accent drop-shadow-sm">
          GetWords.
        </h4>
        <p className="mt-1 text-sm text-sidebar-foreground/60">Your personal dictionary.</p>
      </div>

      <div>
        <span className="mb-3 block font-chewy text-sm text-accent/70">
          Categories
        </span>

        <nav>
          <ul className="space-y-2">
            {categories.map((category) => (
              <li key={category.name}>
                <a
                  href="#"
                  className={`flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-semibold transition-all duration-200 ${
                    category.active
                      ? 'bg-accent/15 text-accent shadow-sm ring-1 ring-accent/20'
                      : 'text-sidebar-foreground/70 hover:bg-accent/5 hover:text-accent hover:shadow-sm'
                  }`}
                >
                  <span>{category.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  )
}

export default Sidebar