"use client"

import React from 'react'
import { useState, useEffect } from "react"

type Category = {
  id: number;
  userId: string;
  name: string;
  createdAt: Date;
};

function Sidebar() {

  const [categories, setCategories] = useState<Category[]>([])
  const [categoryActive, setCategoryActive] = useState<number | null>(null)

  useEffect(() => {
    const getCategories = async () => {
      const response = await fetch("/api/categories")
      const data = await response.json()
      setCategories(data)
    }
    getCategories();
  }, [])

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
                  onClick={() => setCategoryActive(category.id)}
                  href="#"
                  className={`flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-semibold transition-all duration-200 ${
                    categoryActive === category.id
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