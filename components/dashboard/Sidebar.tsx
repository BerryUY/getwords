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
    <aside className="flex h-screen w-72 flex-col gap-6 bg-linear-to-b from-orange-50 via-amber-50 to-yellow-100 p-6 text-slate-800 shadow-xl ring-1 ring-orange-100/80">
      <div className="rounded-lg border border-white/70 bg-white/70 p-4 shadow-sm backdrop-blur">
        <h4 className="text-2xl font-black tracking-tight text-orange-600">
          GetWords.
        </h4>
        <p className="mt-1 text-sm text-slate-500">Your personal dictionary.</p>
      </div>

      <div>
        <span className="mb-3 block text-xs font-bold uppercase tracking-[0.25em] text-orange-500">
          Categories
        </span>

        <nav>
          <ul className="space-y-2">
            {categories.map((category) => (
              <li key={category.name}>
                <a
                  href="#"
                  className={`flex items-center justify-between rounded-sm px-4 py-3 text-sm font-semibold transition-all duration-200 border border-transparent shadow-sm ${
                    category.active
                      ? 'bg-orange-200 text-orange-900 shadow-md ring-1 ring-orange-300/70'
                      : 'bg-white/70 text-slate-700 hover:bg-orange-100 hover:text-orange-900 hover:shadow-md'
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